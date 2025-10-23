import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getSearchHistories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search-histories`, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });

    if (response.data && response.data.data) {
      return response.data.data;
    } else if (Array.isArray(response.data)) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching search histories:", error);
    throw new Error(
      error.response?.data?.message || "Gagal memuat riwayat pencarian"
    );
  }
};
