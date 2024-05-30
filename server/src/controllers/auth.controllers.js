import { User } from '../models/user.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import jwt from 'jsonwebtoken';
import { generateAccessAndRefereshTokens } from '../utils/commonUtils.js';
import { ResponseOptions } from '../constants.js';

export const handleUserSignUp = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    if ([email, username, password].some((field) => field?.trim() === '')) {
      throw new ApiError(400, 'All fields are required');
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new ApiError(409, 'Email or username already exists');
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

    return res
      .status(200)
      .cookie('accessToken', accessToken, ResponseOptions)
      .cookie('refreshToken', refreshToken, ResponseOptions)
      .json(
        new ApiResponse(200, { accessToken }, 'User Successfully Signedin')
      );
  } catch (err) {
    next(err);
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
      sameSite: 'None',
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

    return res
      .status(200)
      .json(new ApiResponse(200, { accessToken: token }, 'User Verified'));
  } catch (err) {
    next(err);
  }
};
