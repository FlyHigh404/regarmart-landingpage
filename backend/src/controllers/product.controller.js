import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";
import productModel from "../models/product.model.js";
import searchHistoryModel from "../models/search_history.model.js";

const getProducts = catchAsync(async (req, res) => {
  const { search } = req.query;
  const userToken = req.userToken;

  const lang = req.query.lang || 'id';

  if (search && userToken) {
    searchHistoryModel
      .create(userToken, search.trim())
      .catch((err) => console.error(err));
  }

  const products = await productModel.findAll(req.query, lang);

  if (!products.data || products.data.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Produk tidak ada.",
    });
  }

  return res.status(httpStatus.OK).json({
    success: true,
    data: products.data,
    meta: products.meta,
    message: "Produk berhasil diambil.",
  });
});

const getBestSellers = catchAsync(async (req, res) => {
  const lang = req.query.lang || 'id';

  const products = await productModel.findBestSellers(lang);

  if (!products || products.length === 0) {
    return res.status(httpStatus.OK).json({
      success: true,
      data: [],
      message: "Produk tidak ada.",
    });
  }

  return res.status(httpStatus.OK).json({
    success: true,
    data: products,
    message: "Produk Terlaris berhasil diambil.",
  });
});

export default { getProducts, getBestSellers };