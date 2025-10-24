import { ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export function useSearchHistory() {
  const histories = ref([]);
  const isHistoryLoading = ref(false);
  const historyError = ref(null);

  const fetchSearchHistories = async () => {
    isHistoryLoading.value = true;
    historyError.value = null;
    try {
      const userToken = Cookies.get("userToken");

      if (!userToken) {
        historyError.value = "User token not found. Please log in.";
        isHistoryLoading.value = false;
        return;
      }

      const response = await axios.get(`${API_BASE_URL}/search-histories`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      histories.value = response.data;
    } catch (err) {
      historyError.value =
        "Failed to fetch search histories. " +
        (err.response?.data?.message || err.message);
      histories.value = [];
      console.error(historyError.value);
    } finally {
      isHistoryLoading.value = false;
    }
  };

  return {
    histories,
    isHistoryLoading,
    historyError,
    fetchSearchHistories,
  };
}
