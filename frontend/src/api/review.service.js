// frontend/src/api/review.service.js
import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Sesuaikan dengan port backend Anda

/**
 * Mengambil daftar testimonial (ulasan) dari server.
 * @param {number} page - Halaman saat ini.
 * @param {number} limit - Jumlah item per halaman.
 * @returns {Promise<{data: Array<Object>, meta: Object}>}
 */
export const getTestimonials = async (page = 1, limit = 4) => {
  try {
    // Memastikan parameter dikirim sebagai query string
    const response = await axios.get(`${BASE_URL}/api/testimonials`, {
      params: { page, limit },
    });

    // Validasi format respons dari controller Anda
    if (
      response.data.success &&
      response.data.data &&
      Array.isArray(response.data.data)
    ) {
      return {
        data: response.data.data,
        meta: response.data.meta, // Mengambil data pagination (meta)
      };
    }

    // Jika success=true tapi data kosong, kembalikan array kosong dengan meta default
    return {
      data: [],
      meta: { totalItems: 0, totalPages: 1, currentPage: 1, itemsPerPage: 4 },
    };
  } catch (error) {
    // Log error asli (misal CORS/Network)
    console.error("Error fetching Testimonials:", error);

    // Melemparkan error yang lebih user-friendly
    throw new Error(
      "Gagal memuat daftar Testimonial dari server. Cek koneksi backend."
    );
  }
};
