import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

/**
 * @returns {Promise<object[]>} Array produk terlaris
 */
export async function getBestSellers() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/bestsellers`, {
      withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching best sellers:", error);
    throw error;
  }
}
