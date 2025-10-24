import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import unitModel from "../models/unit.model.js";

const getUnits = catchAsync(async (req, res) => {
  const lang = req.query.lang || 'id';

  const units = await unitModel.findAll(lang);

  if (!units || units.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Satuan Produk tidak ada.",
    });
  }

  return res.status(httpStatus.OK).json({
    success: true,
    data: units,
    message: "Satuan Produk berhasil diambil.",
  });
});

export default { getUnits };