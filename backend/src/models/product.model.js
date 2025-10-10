import prisma from "../config/prisma.js";

const findAll = async (queryParams) => {
  const { search, category, unit } = queryParams;
  const searchTerm = search ?? "";
  const where = {};

  // SEARCH
  if (search) {
    where.OR = [
      { name: { contains: searchTerm } },
      { description: { contains: searchTerm } },
    ];
  }

  // CATEGORY FILTER
  if (category) {
    where.categoryId = parseInt(category);
  }

  // UNIT FILTER
  if (unit) {
    where.unitId = parseInt(unit);
  }

  return prisma.product.findMany({
    where
  });
};

const findBestSellers = async () => {
  return prisma.product.findMany({
    orderBy: { totalSold: "desc" },
    take: 6,
    include: { category: true, unit: true },
  });
};

export default { findAll, findBestSellers };
