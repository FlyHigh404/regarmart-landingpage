import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

/**
 * @returns {Promise<Array>}
 */
export const getCategories = async (lang = 'id') => {
  try {
    const response = await axios.get(`${BASE_URL}/categories?lang=${lang}`);

    if (response.data.success && Array.isArray(response.data.data)) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching Categories:", error.message);

    throw new Error("Gagal memuat daftar Kategori dari server.");
  }
};
