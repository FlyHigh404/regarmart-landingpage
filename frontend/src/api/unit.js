import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

/**
 * @returns {Promise<object>} Respon dari API
 */
export async function getUnits() {
  try {
    const response = await axios.get(`${API_BASE_URL}/units`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching units:", error);
    throw error;
  }
}
