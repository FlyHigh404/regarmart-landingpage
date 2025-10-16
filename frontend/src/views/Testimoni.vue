<template>
  <div class="px-4 sm:px-10 lg:px-[145px]">
    <div class="whatsapp-background-blob-top-right"></div>
    <div class="whatsapp-background-blob-bottom-left"></div>

    <section id="testihero" class="text-center pt-10">
      <div class="container mx-auto">
        <h1 class="text-2xl sm:text-[38px] font-extrabold leading-tight mb-4 mx-auto max-w-3xl">
          <span class="text-[#26A81D]">Cerita Mereka </span>
          <span class="text-[#1B1F1B]">Adalah Inspirasi Kami Untuk Terus Memberikan </span>
          <span class="text-[#26A81D]">Layanan Terbaik</span>
        </h1>
        <p class="text-[#6D706E] text-sm sm:text-lg mx-auto max-w-3xl mb-10 px-4 sm:px-0">
          Temukan cerita dari para pelanggan <span class="font-bold">Regar Mart</span> yang sudah merasakan sendiri
          <span class="font-bold">kemudahan belanja</span> kebutuhan harian di sini.
        </p>
      </div>
    </section>

    <section class="review-section w-full pb-10">
      <div class="container mx-auto">

        <div v-if="isLoading" class="flex justify-center items-center h-48">
          <svg class="animate-spin h-8 w-8 text-[#26A81D]" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <p class="ml-3 text-lg text-[#6D706E]">Memuat testimoni...</p>
        </div>

        <div v-else-if="error" class="text-center py-10">
          <p class="text-lg text-red-500">❌ Gagal memuat testimoni: {{ error }}</p>
        </div>
        <div v-else-if="testimonials.length === 0" class="text-center py-10">
          <p class="text-lg text-[#6D706E]">Belum ada testimoni. Jadilah pelanggan pertama yang memberikan ulasan! 😊
          </p>
        </div>

        <div v-else class="flex flex-wrap justify-center gap-4 sm:gap-6">

          <div v-for="(testimonial, index) in testimonials" :key="testimonial.id"
            class="w-full md:w-[calc(50%-12px)] lg:w-[49%] max-w-lg p-4 rounded-xl shadow-lg bg-white">
            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center">
                <img :src="testimonial.customerImage || '/default-avatar.jpg'"
                  :alt="testimonial.customerName + ' Avatar'" class="w-10 h-10 rounded-full mr-3 object-cover">
                <div>
                  <p class="text-sm font-semibold text-[#1B1F1B]">{{ testimonial.customerName }}</p>
                  <p class="text-xs text-[#6D706E]">{{ testimonial.customerTitle }}</p>
                </div>
              </div>
              <span class="text-[12px] text-[#6D706E]">{{ testimonial.createdAt }}</span>
            </div>

            <div class="flex items-center mb-3 justify-between" @click="toggleRatingTags(index)"
              :class="{ 'cursor-pointer md:cursor-default': isMobileOrTablet }">
              <div class="flex items-center">
                <span class="text-[#26A81D] text-xl mr-2">
                  {{ '★'.repeat(testimonial.rating) }}{{ '☆'.repeat(5 - testimonial.rating) }}
                </span>
                <span class="text-[#1B1F1B] text-sm font-semibold">{{ testimonial.rating.toFixed(1) }}</span>
              </div>
              <svg v-if="isMobileOrTablet" :class="{ 'rotate-180': openTagsIndex === index }"
                class="w-5 h-5 text-[#26A81D] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>

            <div v-if="testimonial.product"
              class="flex items-center rounded-lg mb-4 bg-white shadow-md p-2 border border-gray-100">
              <div class="w-16 h-16 mr-3 relative flex-shrink-0">
                <img :src="testimonial.product.imageUrl || '/default-product.png'"
                  :alt="'Produk ' + testimonial.product.name" class="w-full h-full object-cover rounded">
              </div>
              <div class="text-[12px]">
                <p class="font-medium text-[#1B1F1B] line-clamp-2">{{ testimonial.product.name }}</p>
                <p class="font-bold text-[#1B1F1B]">
                  {{ formatRupiah(testimonial.product.isPromo ? testimonial.product.promoPrice :
                    testimonial.product.basePrice) }}
                </p>
              </div>
            </div>

            <div class="mb-4" :class="{
              'block': openTagsIndex === index,
              'hidden md:block': openTagsIndex !== index && isMobileOrTablet,
              'block': !isMobileOrTablet
            }">
              <div class="flex flex-wrap gap-2 font-bold">
                <div v-for="(tag, tagIndex) in testimonial.ratingTags" :key="tagIndex"
                  class="flex items-center p-1 px-2 text-xs bg-[#E4F5E3] rounded-full text-[#26A81D]">
                  <span class="mr-1">{{ tag.ratingValue }}/5</span> {{ tag.tagName }}
                </div>
              </div>
            </div>

            <div v-if="testimonial.images.length" class="flex gap-2 mb-4">
              <img v-for="(image, imgIndex) in testimonial.images.slice(0, 3)" :key="'img-' + imgIndex" :src="image"
                :alt="'Review Photo ' + (imgIndex + 1)" class="w-16 h-16 object-cover rounded border border-gray-300">
              <div v-for="placeholderIndex in (3 - testimonial.images.length > 0 ? 3 - testimonial.images.length : 0)"
                :key="'ph-' + placeholderIndex" class="w-16 h-16 bg-gray-200 rounded border border-gray-300"></div>
            </div>
            <div v-else class="flex gap-2 mb-4">
              <div class="w-16 h-16 bg-gray-200 rounded border border-gray-300"></div>
            </div>

            <p class="text-sm text-[#1B1F1B]">
              {{ testimonial.content }}
            </p>
          </div>
        </div>

        <div class="mt-10" v-if="meta.totalPages > 1">
          <Pagination :currentPage="meta.currentPage" :totalPages="meta.totalPages" :goToPage="goToPage" />
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Anda mungkin perlu menginstal axios: npm install axios
import axios from 'axios';
import Pagination from '@/components/Pagination.vue';

// --- STATE MANAGEMENT ---
const testimonials = ref([]);
const meta = ref({
  totalItems: 0,
  totalPages: 1,
  currentPage: 1,
  itemsPerPage: 4, // Default sesuai dengan model backend
});
const isLoading = ref(true);
const error = ref(null);

// State untuk UI Toggle (Mobile)
const openTagsIndex = ref(null);
const isMobileOrTablet = ref(false);


// --- HELPER FUNCTIONS (Clean Code) ---

/**
 * Mengubah angka menjadi format Rupiah.
 * @param {number} price 
 */
const formatRupiah = (price) => {
  if (price === undefined || price === null) return 'Rp0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

// --- API CONSUMPTION (Best Practice) ---

/**
 * Mengambil data testimoni dari API dengan parameter paginasi.
 * @param {number} page - Halaman yang akan dimuat.
 */
const fetchTestimonials = async (page = 1) => {
  // 1. Setup State: Mengatur state loading dan error
  isLoading.value = true;
  error.value = null;

  try {
    // 2. HTTP Request: Menggunakan Axios dengan parameter query
    const response = await axios.get('/api/testimonials', {
      params: {
        page: page,
        // Gunakan itemsPerPage dari state meta, atau default 4
        limit: meta.value.itemsPerPage
      }
    });

    // 3. Data Handling: Memproses response yang sukses
    if (response.data.success && response.data.data) {
      testimonials.value = response.data.data;
      meta.value = response.data.meta;
      // Memastikan currentPage diperbarui sesuai dengan meta response
      meta.value.currentPage = page;
    } else if (response.data.success && response.data.data.length === 0) {
      testimonials.value = [];
      meta.value.currentPage = page;
      // Opsional: set totalPages ke 1 jika data kosong
      meta.value.totalPages = 1;
    } else {
      // Menangani kegagalan API non-HTTP Error (misal: success: false)
      error.value = response.data.message || 'Gagal memuat testimoni.';
      testimonials.value = [];
    }
  } catch (err) {
    // 4. Error Catching: Menangkap dan menampilkan error koneksi/server
    console.error("Error fetching testimonials:", err);
    error.value = err.response?.data?.message || err.message || 'Terjadi kesalahan saat koneksi ke server.';
    testimonials.value = [];
  } finally {
    // 5. Final State: Menghentikan loading state
    isLoading.value = false;
  }
};

// --- HANDLERS (Clean Code) ---

/**
 * Mengubah halaman paginasi dan memuat data baru.
 * @param {number} page - Halaman tujuan.
 */
const goToPage = (page) => {
  if (page >= 1 && page <= meta.value.totalPages && page !== meta.value.currentPage) {
    // Memanggil API dengan halaman baru
    fetchTestimonials(page);

    // Opsional: Scroll ke atas section review setelah pindah halaman
    document.querySelector('.review-section').scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Mengubah state tampilan rating tags di mobile.
 * @param {number} index - Index testimoni yang di-klik.
 */
const toggleRatingTags = (index) => {
  // Hanya berlaku di mobile/tablet
  if (isMobileOrTablet.value) {
    openTagsIndex.value = openTagsIndex.value === index ? null : index;
  }
};

/**
 * Cek ukuran layar untuk menentukan state mobile.
 */
const checkScreenSize = () => {
  // Menggunakan breakpoint lg (1024px) sesuai Tailwind CSS
  isMobileOrTablet.value = window.innerWidth < 1024;

  // Jika kembali ke desktop, tutup semua tag yang terbuka
  if (!isMobileOrTablet.value) {
    openTagsIndex.value = null;
  }
};


// --- LIFECYCLE HOOKS ---

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  // Memuat data awal saat komponen dipasang
  fetchTestimonials(meta.value.currentPage);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
/* Ensure multiline text on product name is handled gracefully */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>