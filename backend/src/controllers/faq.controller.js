import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import faqModel from "../models/faq.model.js";

const getFaqs = catchAsync(async (req, res) => {
  const faqs = await faqModel.findAll(['id', 'question', 'answer']);

  if (!faqs || faqs.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Data Faqs kosong.",
    });
  }

  return res.status(httpStatus.OK).json({
    success: true,
    data: faqs,
    message: "Data Faqs berhasil diambil.",
  });
});

export default { getFaqs };
