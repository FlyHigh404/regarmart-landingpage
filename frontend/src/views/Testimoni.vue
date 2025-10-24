<template>
  <div class="px-4 sm:px-10 lg:px-[145px]">
    <div class="whatsapp-background-blob-top-right"></div>
    <div class="whatsapp-background-blob-bottom-left"></div>

    <section id="testihero" class="text-center pt-10">
      <div class="container mx-auto">
        <h1 class="text-2xl sm:text-[38px] font-extrabold leading-tight mb-4 mx-auto max-w-3xl">
          <span v-for="(text, index) in $tm('testimonials.title')" :key="index"
            :class="[index % 2 !== 0 ? 'text-[#1B1F1B]' : 'text-[#26A81D]']">
            {{ $rt(text) }}
          </span>
        </h1>
        <p class="text-[#6D706E] text-sm sm:text-lg mx-auto max-w-3xl mb-10 px-4 sm:px-0" v-html="$t('testimonials.subtitle')"></p>
      </div>
    </section>

    <div v-if="isLoading" class="text-center py-20 text-[#6D706E]">
      <svg class="animate-spin h-5 w-5 mr-3 inline-block text-[#26A81D]" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
      {{ locale === "id" ? "Memuat Testimoni..." : "Loading Testimonials..." }}
    </div>

    <div v-else-if="!isLoading && testimonials.length === 0" class="text-center py-20 text-[#6D706E]">
      {{ locale === "id" ? "Belum ada testimoni." : "No testimonials yet." }}
    </div>

    <section v-else class="review-section w-full pb-10">
      <div class="container mx-auto">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

          <div v-for="(testimonial, index) in testimonials" :key="testimonial.id"
            class="p-4 rounded-xl shadow-lg bg-white">

            <div class="flex justify-between items-center mb-3">
              <div class="flex items-center">
                <img :src="testimonial.customerImage || '/default-avatar.jpg'" :alt="testimonial.customerName"
                  class="w-10 h-10 rounded-full mr-3 object-cover">
                <div>
                  <p class="text-sm font-semibold text-[#1B1F1B]">{{ testimonial.customerName || 'Pelanggan' }}</p>
                  <p class="text-xs text-[#6D706E]">{{ testimonial.customerTitle || 'Pelanggan Regar Mart' }}</p>
                </div>
              </div>
              <span class="text-[12px] text-[#6D706E]">{{ testimonial.createdAt }}</span>
            </div>

            <div class="flex items-center mb-3 justify-between" @click="toggleRatingTags(index)"
              :class="{ 'cursor-pointer md:cursor-default lg:cursor-default': isMobileOrTablet }">
              <div class="flex items-center">
                <span class="text-[#26A81D] text-xl mr-2">{{ '★'.repeat(testimonial.rating) + '☆'.repeat(5 -
                  testimonial.rating)
                }}</span>
                <span class="text-[#1B1F1B] text-sm font-semibold">{{ testimonial.rating.toFixed(1) }}</span>
              </div>
              <svg v-if="isMobileOrTablet && testimonial.ratingTags.length > 0"
                :class="{ 'rotate-180': openTagsIndex === index }"
                class="w-5 h-5 text-[#26A81D] transition-transform duration-300" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>

            <div v-if="testimonial.product" class="flex items-center rounded-lg mb-4 bg-white shadow-md p-2">
              <div class="w-16 h-16 mr-3 relative">
                <img :src="testimonial.product.imageUrl || '/default-product.png'" :alt="testimonial.product.name"
                  class="w-full h-full object-cover rounded">
              </div>
              <div class="text-[12px]">
                <p class="font-medium text-[#1B1F1B]">{{ testimonial.product.name }}</p>
                <p class="font-bold text-[#1B1F1B]">
                  {{ new Intl.NumberFormat('id-ID', {
                    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
                  }).format(testimonial.product.isPromo ? testimonial.product.promoPrice :
                    testimonial.product.basePrice) }}
                </p>
              </div>
            </div>

            <div v-if="testimonial.ratingTags.length > 0" class="mb-4"
              :class="{ 'block': openTagsIndex === index || !isMobileOrTablet, 'hidden': openTagsIndex !== index && isMobileOrTablet }">
              <div class="flex flex-wrap gap-2 font-bold">
                <div v-for="(tag, tagIndex) in testimonial.ratingTags" :key="tagIndex"
                  class="flex items-center p-1 px-2 text-xs bg-[#E4F5E3] rounded-full text-[#26A81D]">
                  <span class="mr-1">{{ tag.ratingValue }}/5</span> {{ tag.tagName }}
                </div>
              </div>
            </div>

            <div v-if="testimonial.images.length > 0" class="flex gap-2 mb-4">
              <img v-for="(image, imageIndex) in testimonial.images.slice(0, 3)" :key="imageIndex" :src="image"
                :alt="`Review Photo ${imageIndex + 1}`" class="w-16 h-16 object-cover rounded border border-gray-300">
              <div v-for="n in (3 - testimonial.images.length > 0 ? 3 - testimonial.images.length : 0)"
                :key="`placeholder-${n}`" class="w-16 h-16 bg-gray-200 rounded border border-gray-300"></div>
            </div>

            <p class="text-sm text-[#1B1F1B]">
              {{ testimonial.content }}
            </p>
          </div>
        </div>

        <Pagination :currentPage="currentPage" :totalPages="totalPages" :goToPage="goToPage" />

      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { ref, onMounted, onUnmounted, watch } from 'vue';
import axios from 'axios';
import Pagination from '@/components/Pagination.vue';
import { useI18n } from 'vue-i18n';

useHead({
  title: 'Testimoni Pelanggan - Regar Mart',
  meta: [
    {
      name: 'description',
      content: 'Baca testimoni dari pelanggan Regar Mart yang telah merasakan kemudahan belanja kebutuhan harian secara online dengan produk segar dan layanan terbaik.',
    },
    {
      name: 'keywords',
      content: 'testimoni pelanggan, ulasan pelanggan, pengalaman belanja, Regar Mart, belanja online, produk segar, layanan pelanggan',
    },
    {
      property: 'og:title',
      content: 'Testimoni Pelanggan - Regar Mart',
    },
    {
      property: 'og:description',
      content: 'Baca testimoni dari pelanggan Regar Mart yang telah merasakan kemudahan belanja kebutuhan harian secara online dengan produk segar dan layanan terbaik.',
    },
  ],
});

const testimonials = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const openTagsIndex = ref(null);
const isMobileOrTablet = ref(false);
const isLoading = ref(true);
const isPageChanging = ref(false);

const { locale } = useI18n();

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;
const ITEMS_PER_PAGE = 4;
const LOCAL_STORAGE_KEY = 'currentPageTestimonial';

const fetchTestimonials = async (page, isInitial = false) => {
  if (isInitial) isLoading.value = true;
  else isPageChanging.value = true;

  try {
    const response = await axios.get(`${API_BASE_URL}/testimonials`, {
      params: { page, limit: ITEMS_PER_PAGE },
    });

    const data = response.data;
    if (data.success && data.data) {
      testimonials.value = data.data;
      totalPages.value = data.meta.totalPages;
      currentPage.value = data.meta.currentPage;
    } else {
      testimonials.value = [];
      totalPages.value = 1;
      currentPage.value = 1;
    }
  } catch (error) {
    console.error('Gagal mengambil testimoni:', error);
    testimonials.value = [];
    totalPages.value = 1;
  } finally {
    isLoading.value = false;
    isPageChanging.value = false;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page;
    localStorage.setItem(LOCAL_STORAGE_KEY, page);
  }
};

const toggleRatingTags = (index) => {
  if (isMobileOrTablet.value) {
    openTagsIndex.value = openTagsIndex.value === index ? null : index;
  }
};

const checkScreenSize = () => {
  isMobileOrTablet.value = window.innerWidth < 1024;
  if (!isMobileOrTablet.value) openTagsIndex.value = null;
};

watch(currentPage, (newPage, oldPage) => {
  if (oldPage !== null) fetchTestimonials(newPage, false);
});

onMounted(() => {
  const savedPage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedPage) currentPage.value = parseInt(savedPage, 10);

  fetchTestimonials(currentPage.value, true);
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>


<style scoped></style>