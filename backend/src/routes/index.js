import express from "express";
import productController from "../controllers/product.controller.js";
import categoryController from "../controllers/category.controller.js";
import unitController from "../controllers/unit.controller.js";
import searchHistoryController from "../controllers/search_history.controller.js";
import faqsController from "../controllers/faq.controller.js";
import testimonialController from "../controllers/testimonial.controller.js";
import leadsController from "../controllers/lead.controller.js";

import userTokenMiddleware from "../middlewares/userToken.js";
import { verifyRecaptcha } from "../middlewares/recaptcha.js";
import { validate } from "../middlewares/validate.js";
import { apiLimiter, emailLimiter } from "../middlewares/rateLimiter.js";

import {
  validateGetProducts,
  validateGetTestimonials,
  validateLeadsInput,
} from "../utils/requestValidation.js";

const router = express.Router();

/**
 * @swagger
 * /:
 * get:
 * summary: Cek status API
 * description: Endpoint untuk memastikan server API berjalan dengan baik.
 * tags: [Status]
 * responses:
 * 200:
 * description: API berjalan.
 * content:
 * text/plain:
 * schema:
 * type: string
 * example: API is running...✅
 */
router.get("/", (req, res) => {
  res.send("API is running...✅");
});

/**
 * @swagger
 * /categories:
 * get:
 * summary: Mendapatkan semua kategori produk
 * description: Mengambil daftar semua kategori produk yang tersedia, diurutkan berdasarkan ID.
 * tags: [Categories]
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar semua kategori.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/SuccessCategoryResponse'
 */
router.get("/categories", categoryController.getCategories);

/**
 * @swagger
 * /units:
 * get:
 * summary: Mendapatkan semua satuan produk
 * description: Mengambil daftar semua satuan (unit) produk yang tersedia, diurutkan berdasarkan ID.
 * tags: [Units]
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar semua satuan.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/SuccessUnitResponse'
 */
router.get("/units", unitController.getUnits);

/**
 * @swagger
 * /products:
 * get:
 * summary: Mendapatkan daftar produk dengan filter dan paginasi
 * description: Mengambil daftar produk yang dapat difilter berdasarkan kata kunci, kategori, satuan, dan status promo. Mendukung sorting dan paginasi.
 * tags: [Products]
 * parameters:
 * - in: query
 * name: search
 * schema: { type: 'string' }
 * description: Kata kunci untuk mencari nama atau deskripsi produk.
 * - in: query
 * name: category
 * schema: { type: 'integer' }
 * description: ID kategori untuk memfilter produk.
 * - in: query
 * name: unit
 * schema: { type: 'string' }
 * description: 'Satu atau beberapa ID unit, dipisahkan koma (contoh: 1,3,5).'
 * - in: query
 * name: isPromo
 * schema: { type: 'boolean' }
 * description: Filter produk berdasarkan status promo (true atau false).
 * - in: query
 * name: sortByType
 * schema: { type: 'string', enum: [bestseller, newest] }
 * description: 'Mengurutkan berdasarkan produk terlaris atau terbaru (default: newest).'
 * - in: query
 * name: sortByPrice
 * schema: { type: 'string', enum: [asc, desc] }
 * description: Mengurutkan berdasarkan harga (efektif) termurah atau termahal.
 * - in: query
 * name: page
 * schema: { type: 'integer', default: 1 }
 * description: Nomor halaman untuk paginasi.
 * - in: query
 * name: limit
 * schema: { type: 'integer', default: 9 }
 * description: Jumlah item per halaman.
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar produk beserta metadata paginasi.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * success: { type: 'boolean', example: true }
 * data:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 * meta:
 * $ref: '#/components/schemas/PaginationMeta'
 */
router.get(
  "/products",
  validateGetProducts,
  validate,
  userTokenMiddleware,
  productController.getProducts
);

/**
 * @swagger
 * /products/bestsellers:
 * get:
 * summary: Mendapatkan produk terlaris
 * description: Mengambil 6 produk terlaris berdasarkan jumlah penjualan tertinggi.
 * tags: [Products]
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar produk terlaris.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * success: { type: 'boolean', example: true }
 * data:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 */
router.get(
  "/products/bestsellers",
  productController.getBestSellers
);

/**
 * @swagger
 * /search-histories:
 * get:
 * summary: Mendapatkan riwayat pencarian pengguna
 * description: Mengambil 5 riwayat pencarian terakhir dari pengguna berdasarkan cookie 'user_token'.
 * tags: [Search History]
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar riwayat pencarian.
 * content:
 * application/json:
 * schema:
 * type: 'object'
 * properties:
 * success: { type: 'boolean', example: true }
 * data:
 * type: 'array'
 * items:
 * $ref: '#/components/schemas/SearchHistory'
 */

router.get(
  "/search-histories",
  apiLimiter,
  userTokenMiddleware,
  searchHistoryController.getSearchHistories
);

/**
 * @swagger
 * /faqs:
 * get:
 * summary: Mendapatkan semua FAQ
 * description: Mengambil daftar semua pertanyaan dan jawaban yang sering diajukan.
 * tags: [FAQs]
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar FAQ.
 * content:
 * application/json:
 * schema:
 * type: 'object'
 * properties:
 * success: { type: 'boolean', example: true }
 * data:
 * type: 'array'
 * items:
 * $ref: '#/components/schemas/Faq'
 */
router.get("/faqs", faqsController.getFaqs);

/**
 * @swagger
 * /testimonials:
 * get:
 * summary: Mendapatkan daftar testimoni dengan paginasi
 * description: Mengambil daftar testimoni pelanggan beserta produk terkait, gambar, dan tag rating.
 * tags: [Testimonials]
 * parameters:
 * - in: query
 * name: page
 * schema: { type: 'integer', default: 1 }
 * description: Nomor halaman untuk paginasi.
 * - in: query
 * name: limit
 * schema: { type: 'integer', default: 4 }
 * description: Jumlah testimoni per halaman.
 * responses:
 * 200:
 * description: Sukses. Mengembalikan daftar testimoni.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * success: { type: 'boolean', example: true }
 * data:
 * type: array
 * items:
 * $ref: '#/components/schemas/Testimonial'
 * meta:
 * $ref: '#/components/schemas/PaginationMeta'
 */
router.get(
  "/testimonials",
  validateGetTestimonials,
  validate,
  testimonialController.getTestimonials
);

/**
 * @swagger
 * /leads:
 * post:
 * summary: Mendaftarkan email untuk newsletter
 * description: Mendaftarkan email baru setelah melewati validasi dan verifikasi reCAPTCHA v3.
 * tags: [Leads]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required: [email, recaptchaToken]
 * properties:
 * email:
 * type: string
 * format: email
 * example: 'pelanggan.baru@example.com'
 * recaptchaToken:
 * type: string
 * description: Token yang didapat dari frontend setelah eksekusi reCAPTCHA v3.
 * example: '03AFc..._w'
 * responses:
 * 201:
 * description: Berhasil terdaftar.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * success: { type: 'boolean', example: true }
 * message: { type: 'string', example: 'Terima kasih telah berlangganan!' }
 * data:
 * type: object
 * properties:
 * id: { type: 'integer', example: 5 }
 * email: { type: 'string', example: 'pelanggan.baru@example.com' }
 * 400:
 * description: Validasi gagal (format email salah atau token reCAPTCHA tidak ada).
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/ErrorResponse'
 * 403:
 * description: Verifikasi reCAPTCHA gagal (kemungkinan bot).
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/ErrorResponse'
 * 409:
 * description: Email sudah terdaftar sebelumnya.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/ErrorResponse'
 */
router.post(
  "/leads",
  emailLimiter,
  validateLeadsInput,
  validate,
  verifyRecaptcha,
  leadsController.createLead
);

export default router;
