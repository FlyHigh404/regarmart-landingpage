import prisma from "../config/prisma.js";

const findAll = async (lang = 'id') => {
  const unitsFromDb = await prisma.unit.findMany({
    select: {
      id: true,
      name_id: true,
      name_eng: true,
    },
    orderBy: {
      id: 'asc',
    },
  });

  const units = unitsFromDb.map(unit => {
    return {
      id: unit.id,
      name: lang === 'eng' ? unit.name_eng : unit.name_id,
    };
  });

  return units;
};

export default { findAll };