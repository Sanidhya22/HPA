import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError.js';
import { User } from '../models/user.model.js';

export const verifyAdminAuth = async (req, res, next) => {
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

    const { isAdmin } = user;

    if (!isAdmin) {
      throw new ApiError(401, 'Unauthorized request Admin access needed ');
    }

    next();
  } catch (err) {
    next(err);
  }
};
