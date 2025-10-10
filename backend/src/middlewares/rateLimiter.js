import rateLimit from 'express-rate-limit';

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { message: 'Terlalu banyak request, silakan coba lagi nanti.' },
  standardHeaders: true,
  legacyHeaders: false,
});