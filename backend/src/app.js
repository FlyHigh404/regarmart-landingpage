import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from "cookie-parser";
import { apiLimiter } from './middlewares/rateLimiter.js';
import ApiError from './utils/apiError.js';
import { globalErrorHandler } from './middlewares/errorHandler.js';
import httpStatus from 'http-status';

import apiRoutes from './routes/index.js';
import corsOptions from './config/corsOptions.js';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is running..., please use /api for main routes');
});
app.use('/api', apiLimiter, apiRoutes);

// handle 404
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Endpoint tidak ditemukan'));
});

app.use(globalErrorHandler);

export default app;