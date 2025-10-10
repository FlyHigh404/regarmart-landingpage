import express from 'express';
import productController from '../controllers/product.controller.js';
import searchHistoryController from '../controllers/search_history.controller.js';
import userTokenMiddleware from '../middlewares/userToken.js';
import { validateGetProducts } from '../utils/requestValidation.js';
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...✅');
});

router.get('/products', validateGetProducts, validate, userTokenMiddleware, productController.getProducts);
router.get('/products/bestsellers', productController.getBestSellers);
router.get('/search-history', userTokenMiddleware, searchHistoryController.getSearchHistories);

export default router;