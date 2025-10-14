import express from 'express';
import productController from '../controllers/product.controller.js';
import categoryController from '../controllers/category.controller.js';
import unitController from '../controllers/unit.controller.js';
import searchHistoryController from '../controllers/search_history.controller.js';
import faqsController from '../controllers/faq.controller.js';

import userTokenMiddleware from '../middlewares/userToken.js';
import { validate } from "../middlewares/validate.js";

import { validateGetProducts } from '../utils/requestValidation.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...✅');
});

router.get('/categories', categoryController.getCategories);
router.get('/units', unitController.getUnits);

router.get('/products', validateGetProducts, validate, userTokenMiddleware, productController.getProducts);
router.get('/products/bestsellers', productController.getBestSellers);

router.get('/search-histories', userTokenMiddleware, searchHistoryController.getSearchHistories);

router.get('/faqs', faqsController.getFaqs);

export default router;