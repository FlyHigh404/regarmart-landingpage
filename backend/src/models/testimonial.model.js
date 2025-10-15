import prisma from '../config/prisma.js';

const findAll = async (queryParams = {}) => {
  const { page = 1, limit = 4 } = queryParams;
  const currentPage = parseInt(page);
  const itemsPerPage = parseInt(limit);
  const offset = (currentPage - 1) * itemsPerPage;

  const dataQuery = prisma.testimonial.findMany({
    skip: offset,
    take: itemsPerPage,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      customerName: true,
      customerTitle: true,
      customerImage: true,
      rating: true,
      content: true,
      createdAt: true,  
      product: {
        select: {
          id: true,
          name: true,
          imageUrl: true,
          isPromo: true,
          basePrice: true,
          promoPrice: true,
        }
      },
      images: { select: { imageUrl: true } },
      ratingTags: {
        select: {
          ratingValue: true,
          tagType: { select: { name: true } },
        },
      },
    },
  });

  const countQuery = prisma.testimonial.count();
  const [testimonials, totalItems] = await Promise.all([dataQuery, countQuery]);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const mappedData = testimonials.map(testimonial => {
    return {
      ...testimonial,
      createdAt: testimonial.createdAt.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      images: testimonial.images.map(img => img.imageUrl),
      ratingTags: testimonial.ratingTags.map(tag => ({
        tagName: tag.tagType.name,
        ratingValue: tag.ratingValue,
      })),
    };
  });

  return {
    data: mappedData, 
    meta: {
      totalItems,
      totalPages,
      currentPage,
      itemsPerPage,
    },
  };
};

export default { findAll };