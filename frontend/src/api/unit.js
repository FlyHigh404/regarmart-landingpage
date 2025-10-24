import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

/**
 * @returns {Promise<object>} Respon dari API
 */
export async function getUnits(lang = 'id') {
  try {
    const response = await axios.get(`${API_BASE_URL}/units?lang=${lang}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching units:", error);
    throw error;
  }
}
