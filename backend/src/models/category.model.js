import prisma from "../config/prisma.js";

const findAll = async (columns = []) => {
  const selects = columns.reduce((acc, column) => {
    acc[column] = true;
    return acc;
  }, {});

  return prisma.category.findMany({
    select: Object.keys(selects).length > 0 ? selects : undefined,
    orderBy: {
      id: 'asc',
    },
  });
};

export default { findAll };
