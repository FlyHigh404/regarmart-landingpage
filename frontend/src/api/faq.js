import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const getFaqs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/faqs`);
    console.log(response);
    if (response.data.success && Array.isArray(response.data.data)) {
      return response.data.data;
    }

    console.error("API response data is not an array:", response.data);
    return [];
  } catch (error) {
    console.error("Error fetching FAQs:", error);

    throw new Error("Gagal mengambil data FAQ dari server.");
  }
};
