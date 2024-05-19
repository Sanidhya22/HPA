import { User } from '../models/user.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import jwt from 'jsonwebtoken';

export const handleUserSignUp = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    if ([email, username, password].some((field) => field?.trim() === '')) {
      throw new ApiError(400, 'All fields are required');
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const createdUser = await User.findById(user._id).select('-password');

    if (!createdUser) {
      throw new ApiError(
        500,
        'Something went wrong while registering the user'
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(200, createdUser, 'User registered Successfully'));
  } catch (err) {
    next(err);
  }
};

export const handleUserSignIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      throw new ApiError(404, 'User does not exist');
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid user credentials');
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );
    const loggedInUser = await User.findById(user._id).select(
      '-password -refreshToken'
    );
    const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: thirtyDaysInMilliseconds,
    };

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', refreshToken, options)
      .json({ user: loggedInUser, accessToken });
  } catch (err) {
    next(err);
  }
};

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while generating referesh and access token'
    );
  }
};

export const handleUserSignOut = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie('accessToken', options)
      .clearCookie('refreshToken', options)
      .json(new ApiResponse(200, {}, 'User logged Out'));
  } catch (error) {
    next(error);
  }
};

export const authenticateToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, 'Unauthorized request');
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Invalid Access Token');
    }

    const { username, email, isAdmin, avatar, profileImageUrl } = user;
    return res
      .status(200)
      .json(
        new ApiResponse(200, { username, email, isAdmin }, 'User Verified')
      );
  } catch (err) {
    next(err);
  }
};