import prisma from "../config/prisma.js";

const findAll = async (lang = 'id') => {
  const categoriesFromDb = await prisma.category.findMany({
    select: {
      id: true,
      name_id: true,
      name_eng: true,
    },
    orderBy: {
      id: 'asc',
    },
  });

  const categories = categoriesFromDb.map(category => {
    return {
      id: category.id,
      name: lang === 'eng' ? category.name_eng : category.name_id,
    };
  });

  return categories;
};

export default { findAll };