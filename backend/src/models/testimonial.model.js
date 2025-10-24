import prisma from '../config/prisma.js';

const findAll = async (queryParams = {}, lang = 'id') => {
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
      customerTitle_id: true,
      customerTitle_eng: true,
      customerImage: true,
      rating: true,
      content_id: true,
      content_eng: true,
      createdAt: true,  
      product: {
        select: {
          id: true,
          name_id: true,
          name_eng: true,
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
          tagType: {
            select: {
              name_id: true,
              name_eng: true
            }
          },
        },
      },
    },
  });

  const countQuery = prisma.testimonial.count();
  const [testimonials, totalItems] = await Promise.all([dataQuery, countQuery]);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const mappedData = testimonials.map(testimonial => {
    return {
      id: testimonial.id,
      customerName: testimonial.customerName,
      customerTitle: lang === 'eng' ? testimonial.customerTitle_eng : testimonial.customerTitle_id,
      customerImage: testimonial.customerImage,
      rating: testimonial.rating,

      content: lang === 'eng' ? testimonial.content_eng : testimonial.content_id,
      
      createdAt: testimonial.createdAt.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      
      product: {
        ...testimonial.product, 
        name: lang === 'eng' ? testimonial.product.name_eng : testimonial.product.name_id,
        name_id: undefined, 
        name_eng: undefined,
      },

      images: testimonial.images.map(img => img.imageUrl),

      ratingTags: testimonial.ratingTags.map(tag => ({
        tagName: lang === 'eng' ? tag.tagType.name_eng : tag.tagType.name_id,
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