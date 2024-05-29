import { User } from '../models/user.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { jwtDecode } from 'jwt-decode';
import { OAuth2Client } from 'google-auth-library';
import { generateAccessAndRefereshTokens } from '../utils/commonUtils.js';

const oAuth2Client = new OAuth2Client(
  '43530715813-44ddc0e4b84ot62e0lhill6ovm74ulq6.apps.googleusercontent.com',
  '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',
  'postmessage'
);

const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;
const options = {
  httpOnly: true,
  maxAge: thirtyDaysInMilliseconds,
  sameSite: 'None',
  secure: true,
};

export const handleGoogleUserSignUp = async (req, res, next) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.body.code);

    const { name, email, picture } = jwtDecode(tokens.id_token);

    if ([email, name, picture].some((field) => field.trim() === '')) {
      throw new ApiError(400, 'All fields are required');
    }

    const mockPassword = email + process.env.PASSWORD_SECRET;

    const user = await User.create({
      email,
      password: mockPassword,
      username: name,
      profileImageUrl: picture,
    });

    const createdUser = await User.findById(user._id).select('-password');

    if (!createdUser) {
      throw new ApiError(
        500,
        'Something went wrong while registering the user'
      );
    }
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', refreshToken, options)
      .json(
        new ApiResponse(200, { accessToken }, 'User registered Successfully')
      );
  } catch (err) {
    next(err);
  }
};

export const handleGoogleUserSignIn = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, 'User does not exist');
    }
    const createPassword = email + process.env.PASSWORD_SECRET;
    const isPasswordValid = await user.isPasswordCorrect(createPassword);
    console.log(isPasswordValid, createPassword);
    if (!isPasswordValid) {
      throw new ApiError(401, 'Invalid user credentials');
    }

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', refreshToken, options)
      .json(
        new ApiResponse(200, { accessToken }, 'User Successfully SignedIn')
      );
  } catch (err) {
    next(err);
  }
};
