const express = require('express');
const { getProducts, getCategories, getTestimonials, getFaqs } = require('../controllers/content.controller');
const router = express.Router();

router.get('/products', getProducts);
router.get('/categories', getCategories);
router.get('/testimonials', getTestimonials);
router.get('/faqs', getFaqs);

module.exports = router;