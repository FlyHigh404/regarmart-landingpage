import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync.js';
import testimonialModel from '../models/testimonial.model.js';

const getTestimonials = catchAsync(async (req, res) => {
  const testimonials = await testimonialModel.findAll(req.query);

  if (!testimonials.data || testimonials.data.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Testimoni tidak ada.",
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    data: testimonials.data,
    meta: testimonials.meta,
    message: "Testimoni berhasil diambil.",
  });
});

export default { getTestimonials };