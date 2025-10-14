import prisma from "../config/prisma.js";
import { Prisma } from '@prisma/client';
import { getMappedProducts } from '../services/whatsappLink.service.js';

const findAll = async (queryParams = {}) => {
  const {
    search = null,
    category = null,
    unit = null,
    isPromo = null,
    sortByType = null,
    sortByPrice = null,
    page = 1,
    limit = 9
  } = queryParams;

  // pagination
  const currentPage = parseInt(page);
  const itemsPerPage = parseInt(limit);
  const offset = (currentPage - 1) * itemsPerPage;

  const whereConditions = [];

  if (search && search.trim() !== "") {
    const searchPattern = `%${search}%`;
    whereConditions.push(Prisma.sql`(p.name LIKE ${searchPattern} OR p.description LIKE ${searchPattern})`);
  }

  if (category && !isNaN(category)) {
    whereConditions.push(Prisma.sql`p.category_id = ${parseInt(category)}`);
  }

  if (unit && typeof unit === "string") {
    const unitIds = unit
      .split(",")
      .map((id) => parseInt(id.trim()))
      .filter((id) => !isNaN(id));

    if (unitIds.length > 0) {
      whereConditions.push(Prisma.sql`p.unit_id IN (${Prisma.join(unitIds)})`);
    }
  }

  if (isPromo !== null && ["true", "false"].includes(String(isPromo).toLowerCase())) {
    const promoValue = String(isPromo).toLowerCase() === "true";
    whereConditions.push(Prisma.sql`p.is_promo = ${promoValue}`);
  }

  const whereClause =
    whereConditions.length > 0 ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}` : Prisma.empty;
  
  const countQuery = prisma.$queryRaw`
    SELECT COUNT(*) as total
    FROM products p
    ${whereClause}
  `;
  
  let orderByClause;
  if (sortByPrice === "asc" || sortByPrice === "desc") {
    const sortOrder = sortByPrice === "asc" ? Prisma.sql`ASC` : Prisma.sql`DESC`;
    orderByClause = Prisma.sql`ORDER BY effective_price ${sortOrder}`;
  } else {
    let sortByColumn;
    if (sortByType === "bestseller") {
      sortByColumn = Prisma.raw("p.total_sold");
    } else if( sortByType === "newest") {
      sortByColumn = Prisma.raw("p.created_at");
    } else {
      sortByColumn = Prisma.raw("RAND()");
    }
    orderByClause = Prisma.sql`ORDER BY ${sortByColumn} DESC`;
  }

  const dataQuery = prisma.$queryRaw`
    SELECT 
      p.id, p.name, p.description, p.is_promo,
      p.base_price, p.promo_price, p.stock, p.image_url,
      p.created_at, p.total_sold,
      c.name AS category_name,
      u.name AS unit_name,
      CASE 
        WHEN p.is_promo = TRUE AND p.promo_price IS NOT NULL 
        THEN p.promo_price 
        ELSE p.base_price 
      END AS effective_price
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN units u ON p.unit_id = u.id
    ${whereClause}
    ${orderByClause}
    LIMIT ${itemsPerPage} OFFSET ${offset}
  `;

  const [totalResult, products] = await Promise.all([countQuery, dataQuery]);

  const totalItems = Number(totalResult[0].total);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const mappedProducts = getMappedProducts(products);
  
  return {
    data: mappedProducts,
    meta: {
      totalItems,
      totalPages,
      currentPage,
      itemsPerPage,
    },
  };
};

const findBestSellers = async () => {
  const products = await prisma.product.findMany({
    orderBy: { totalSold: "desc" },
    take: 6,
  });

  return getMappedProducts(products);
};

export default { findAll, findBestSellers };
