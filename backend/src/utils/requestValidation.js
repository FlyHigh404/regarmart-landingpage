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
    .withMessage("Parameter 'unit' harus berupa angka positif.")
];

export { validateGetProducts };
