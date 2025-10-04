const prisma = require('../config/prisma');

// Helper function untuk menangani response
const handleRequest = async (model, req, res) => {
  try {
    const { search, category } = req.query;
    let where = {};

    if (search) {
      where.name = { contains: search };
    }
    if (category && model === 'product') {
       // Asumsi 'category' adalah nama kategori, bukan ID
      where.category = { name: category };
    }

    const data = await prisma[model].findMany({ where });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

// Export masing-masing controller
exports.getProducts = (req, res) => handleRequest('product', req, res);
exports.getCategories = (req, res) => handleRequest('category', req, res);
exports.getTestimonials = (req, res) => handleRequest('testimonial', req, res);
exports.getFaqs = (req, res) => handleRequest('faq', req, res);