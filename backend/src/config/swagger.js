import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Regar Mart API Documentation',
      version: '1.0.0',
      description: 'Dokumentasi API lengkap untuk landing page Regar Mart. API ini menyediakan data untuk produk, testimoni, FAQ, dan pendaftaran newsletter.',
      contact: {
        name: 'Tim Pengembang Regar Mart',
        email: 'dev@regarmart.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api/',
        description: 'Server Development',
      },
    ],
    tags: [
      {
        name: 'Status',
        description: 'Endpoint untuk memeriksa status API'
      },
      {
        name: 'Categories',
        description: 'API untuk mengelola kategori produk'
      },
      {
        name: 'Units',
        description: 'API untuk mengelola satuan produk'
      },
      {
        name: 'Products',
        description: 'API untuk mengelola data produk'
      },
      {
        name: 'Search History',
        description: 'API untuk riwayat pencarian pengguna'
      },
      {
        name: 'FAQs',
        description: 'API untuk Pertanyaan yang Sering Diajukan'
      },
      {
        name: 'Testimonials',
        description: 'API untuk testimoni pelanggan'
      },
      {
        name: 'Leads',
        description: 'API untuk pendaftaran newsletter'
      }
    ],
    components: {
      schemas: {
        // Model Schemas
        Category: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Sayuran Segar' },
          },
        },
        Unit: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Ikat' },
          },
        },
        Product: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Telur Ayam Negeri 10 Butir' },
            description: { type: 'string', example: 'Telur ayam negeri segar...' },
            is_promo: { type: 'boolean', example: true },
            base_price: { type: 'number', format: 'decimal', example: 20000.00 },
            promo_price: { type: 'number', format: 'decimal', example: 17500.00 },
            stock: { type: 'integer', example: 100 },
            total_sold: { type: 'integer', example: 540 },
            category_name: { type: 'string', example: 'Telur & Unggas' },
            unit_name: { type: 'string', example: 'Butir' },
            effective_price: { type: 'number', format: 'decimal', example: 17500.00 },
          },
        },
        SearchHistory: {
            type: 'object',
            properties: {
                id: { type: 'integer', example: 10 },
                searchTerm: { type: 'string', example: 'Telur Ayam' },
            }
        },
        Faq: {
            type: 'object',
            properties: {
                id: { type: 'integer', example: 1 },
                question: { type: 'string', example: 'Bagaimana cara memesan?' },
                answer: { type: 'string', example: 'Anda bisa memesan melalui WhatsApp...' },
            }
        },
        Testimonial: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            customerName: { type: 'string', example: 'Andi Pratama' },
            customerTitle: { type: 'string', example: 'Mahasiswa' },
            customerImage: { type: 'string', example: 'https://.../user.png' },
            rating: { type: 'number', format: 'float', example: 4.7 },
            content: { type: 'string', example: 'Sayur segar dan pengiriman cepat.' },
            product: {
              type: 'object',
              properties: {
                id: { type: 'integer', example: 4 },
                name: { type: 'string', example: 'Sawi Putih 1 Ikat' },
                imageUrl: { type: 'string', example: 'https://.../sawi.png' },
              },
            },
            images: {
              type: 'array',
              items: {
                type: 'object',
                properties: { imageUrl: { type: 'string', example: 'https://.../user_image.webp' } },
              },
            },
            ratingTags: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  tagName: { type: 'string', example: 'Kesegaran Produk' },
                  ratingValue: { type: 'integer', example: 5 },
                },
              },
            },
          },
        },
        // Utility Schemas
        PaginationMeta: {
          type: 'object',
          properties: {
            totalItems: { type: 'integer', example: 50 },
            totalPages: { type: 'integer', example: 6 },
            currentPage: { type: 'integer', example: 1 },
            itemsPerPage: { type: 'integer', example: 9 },
          },
        },
        // Error Schemas
        ErrorResponse: {
            type: 'object',
            properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string' },
                errors: { type: 'array', items: { type: 'object' }, description: 'Hanya ada saat validasi gagal.' }
            }
        }
      },
    },
  },
  // Path ke file yang berisi definisi endpoint
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

