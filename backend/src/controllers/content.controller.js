import prisma from '../config/prisma.js';

const handleRequest = async (model, req, res, next) => {
  try {
    const { search, category } = req.query;
    let where = {};

    if (search) {
      where.name = { contains: search };
    }
    if (category && model === 'product') {
      where.category = { name: category };
    }

    const data = await prisma[model].findMany({ where });
    res.status(200).json(data);
  } catch (error) {
    next(error); 
  }
};

export const getProducts = (req, res, next) => handleRequest('product', req, res, next);
export const getCategories = (req, res, next) => handleRequest('category', req, res, next);
export const getTestimonials = (req, res, next) => handleRequest('testimonial', req, res, next);
export const getFaqs = (req, res, next) => handleRequest('faq', req, res, next);