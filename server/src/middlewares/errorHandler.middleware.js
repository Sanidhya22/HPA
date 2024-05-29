import { ApiError } from '../utils/apiError.js';

export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ApiError(404, message);
  }
  // Mongoose duplicate key
  else if (err.code === 11000) {
    const fieldName = Object.keys(err.keyValue)[0];
    let message = 'Duplicate field value entered';
    if (fieldName === 'email') {
      message = 'An account with this email already exists';
    } else if (fieldName === 'username') {
      message = 'An account with this username already exists';
    }
    error = new ApiError(400, message);
  }
  // Mongoose validation error
  else if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    const message = `Input error: ${messages.join('. ')}`;
    error = new ApiError(400, message);
  } else {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
    console.log({
      success: false,
      statusCode,
      message,
    });
    return;
  }

  res.status(error.statusCode).json({
    success: false,
    error: error.message,
  });
};
