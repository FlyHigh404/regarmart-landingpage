import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

/**
 * @returns {Promise<Array>}
 */
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);

    if (response.data.success && Array.isArray(response.data.data)) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching Categories:", error.message);

    throw new Error("Gagal memuat daftar Kategori dari server.");
  }
};
