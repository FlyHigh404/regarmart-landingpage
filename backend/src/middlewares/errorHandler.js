import httpStatus from 'http-status';
import ApiError from '../utils/apiError.js';

export const globalErrorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Terjadi kesalahan pada server';

  if (!(err instanceof ApiError) && process.env.NODE_ENV === 'production') {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = 'Terjadi kesalahan pada server';
  }

  console.error('ERROR 💥:', err);

  const response = {
    success: err.success || false,
    status_code: statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  res.setHeader('Content-Type', 'application/json');
  
  res.status(statusCode).json(response);
};