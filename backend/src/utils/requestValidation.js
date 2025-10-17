import { query } from "express-validator";

const validateGetProducts = [
  query("search")
    .optional()
    .trim()
    .escape()
    .isLength({ max: 100 })
    .withMessage("Parameter 'search' terlalu panjang."),
  query("category")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Parameter 'category' harus berupa angka positif."),
  query("unit")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Parameter 'unit' harus berupa angka positif."),
  query("isPromo")
    .optional()
    .trim()
    .escape()
    .isIn(["true", "false"])
    .withMessage("Parameter 'isPromo' harus bernilai 'true' atau 'false'."),
  query("sortByType")
    .optional()
    .trim()
    .escape()
    .isIn(["bestseller", "newest"])
    .withMessage("Parameter 'sortByType' harus bernilai 'bestseller' atau 'newest'."),
  query("sortByPrice")
    .optional()
    .trim()
    .escape()
    .isIn(["asc", "desc"])
    .withMessage("Parameter 'sortByPrice' harus bernilai 'asc' atau 'desc'."),
  query("page")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Parameter 'page' harus berupa angka positif."),
  query("limit")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1, max: 9 })
    .withMessage("Parameter 'limit' harus berupa angka antara 1 hingga 9."),
];

const validateGetTestimonials = [
  query("page")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Parameter 'page' harus berupa angka positif."),
  query("limit")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1, max: 4 })
    .withMessage("Parameter 'limit' harus berupa angka antara 1 hingga 4."),
];

export { validateGetProducts, validateGetTestimonials };
