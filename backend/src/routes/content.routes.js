import express from 'express';
import { getProducts, getCategories, getTestimonials, getFaqs } from '../controllers/content.controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/categories', getCategories);
router.get('/testimonials', getTestimonials);
router.get('/faqs', getFaqs);

export default router;