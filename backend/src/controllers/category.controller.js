import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import categoryModel from "../models/category.model.js";

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoryModel.findAll(['id', 'name']);

  if (!categories || categories.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Kategori Produk tidak ada.",
    });
  }

  return res.status(httpStatus.OK).json({
    success: true,
    data: categories,
    message: "Kategori Produk berhasil diambil.",
  });
});

export default { getCategories };
