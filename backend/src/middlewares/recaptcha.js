import httpStatus from 'http-status';
import ApiError from '../utils/apiError.js';
import catchAsync from '../utils/catchAsync.js';
import { verifyRecaptchaToken } from '../services/recaptcha.service.js';

const verifyRecaptcha = catchAsync(async (req, res, next) => {
  const { recaptchaToken } = req.body;

  if (!recaptchaToken) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Token reCAPTCHA tidak ditemukan.');
  }

  const isHuman = await verifyRecaptchaToken(recaptchaToken);
  if (!isHuman) {
    return res.status(httpStatus.FORBIDDEN).json({ message: 'Verifikasi reCAPTCHA gagal, terdeteksi sebagai bot.' });
  }

  next();
});

export { verifyRecaptcha };