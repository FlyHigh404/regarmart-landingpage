import prisma from '../config/prisma.js';

const create = async (userToken, searchTerm) => {
  return prisma.searchHistory.upsert({
    where: {
      userToken_searchTerm: {
        userToken,
        searchTerm,
      },
    },
    update: { createdAt: new Date() },
    create: { userToken, searchTerm },
  });
};

const findByUserToken = async (userToken) => {
  return prisma.searchHistory.findMany({
    where: { userToken },
    orderBy: { createdAt: 'desc' },
    take: 2,
  });
};

export default { create, findByUserToken };