import prisma from "../config/prisma.js";

const findAll = async (columns = []) => {
  const select = columns.reduce((acc, column) => {
    acc[column] = true;
    return acc;
  }, {});

  return prisma.unit.findMany({
    select: Object.keys(select).length > 0 ? select : undefined,
    orderBy: {
      id: 'asc',
    },
  });
};

export default { findAll };
