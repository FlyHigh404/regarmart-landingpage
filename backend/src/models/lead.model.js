import prisma from '../config/prisma.js';

const findByEmail = async (email) => {
  return prisma.lead.findUnique({ where: { email } });
};

const create = async (email) => {
  return prisma.lead.create({ data: { email } });
};

export default { findByEmail, create };