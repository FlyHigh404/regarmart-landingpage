import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';
import leadModel from '../models/lead.model.js';
import { sendSubscriptionConfirmation } from '../services/newsletter.service.js';
import ApiError from '../utils/apiError.js';

const createLead = catchAsync(async (req, res) => {
  const { email } = req.body;

  const existingLead = await leadModel.findByEmail(email);
  if (existingLead) {
    throw new ApiError(httpStatus.CONFLICT, 'Email ini sudah terdaftar.');
  }

  const newLead = await leadModel.create(email);

  sendSubscriptionConfirmation(newLead.email);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'Terima kasih telah berlangganan!',
    data: { id: newLead.id, email: newLead.email },
  });
});

export default { createLead };