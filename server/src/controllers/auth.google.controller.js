import { User } from '../models/user.model.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { OAuth2Client } from 'google-auth-library';
import { generateAccessAndRefereshTokens } from '../utils/commonUtils.js';
import { ResponseOptions } from '../constants.js';

const oAuth2Client = new OAuth2Client(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  'postmessage'
);

export const handleGoogleUserSignUp = async (req, res, next) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.body.code);
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.OAUTH_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    if ([email, name, picture].some((field) => field.trim() === '')) {
      throw new ApiError(400, 'All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(409, `User with same email already exists`);
    }

    const mockPassword = email + process.env.PASSWORD_SECRET;

    const user = await User.create({
      email,
      password: mockPassword,
      username: name,
      profileImageUrl: picture,
    });

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    return res
      .status(200)
      .cookie('accessToken', accessToken, ResponseOptions)
      .cookie('refreshToken', refreshToken, ResponseOptions)
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

    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    return res
      .status(200)
      .cookie('accessToken', accessToken, ResponseOptions)
      .cookie('refreshToken', refreshToken, ResponseOptions)
      .json(
        new ApiResponse(200, { accessToken }, 'User Successfully SignedIn')
      );
  } catch (err) {
    next(err);
  }
};
