import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

/**
 * @returns {Promise<object[]>} Array produk terlaris
 */
export async function getBestSellers(lang = 'id') {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/bestsellers?lang=${lang}`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching best sellers:", error);
    throw error;
  }
}
