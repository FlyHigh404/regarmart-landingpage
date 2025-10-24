<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref, computed, onMounted, watch, reactive } from 'vue'
import Pagination from '@/components/Pagination.vue'
import { fetchProducts, fetchCategories, fetchUnits } from '@/services/productService';

const router = { 
  replace: (url) => {
    window.history.replaceState(null, '', url);
  },
  current: () => {
    return new URL(window.location.href);
  }
}

const getParamsFromUrl = () => {
  const url = router.current();
  return {
    searchQuery: url.searchParams.get('s') || '',
    categoryFilter: url.searchParams.get('cat') ? Number(url.searchParams.get('cat')) : null,
    unitFilters: url.searchParams.get('unit') ? url.searchParams.get('unit').split(',').map(id => Number(id)).filter(id => !isNaN(id)) : [],
    isPromoFilter: url.searchParams.get('promo') || null,
    sortBy: url.searchParams.get('sort') || '',
    currentPage: url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1,
  };
};

const initialParams = getParamsFromUrl();

// 🔹 Data Produk, Loading, dan Error
const products = ref([]);
const isLoading = ref(false);
const isError = ref(false);
const errorMessage = ref(null);

// 🔹 Filter & Sort Parameters
const filterParams = reactive({
  searchQuery: initialParams.searchQuery,
  categoryFilter: initialParams.categoryFilter,
  unitFilters: initialParams.unitFilters,
  isPromoFilter: initialParams.isPromoFilter,
  sortBy: initialParams.sortBy,
});

const localFilterParams = reactive({
  searchQuery: initialParams.searchQuery,
  categoryFilter: initialParams.categoryFilter,
  unitFilters: [...initialParams.unitFilters], 
  isPromoFilter: initialParams.isPromoFilter,
});

// 🔹 Data Filter Dinamis dari API
const categories = ref([]);
const units = ref([]);
const localSearchQuery = ref(initialParams.searchQuery);

// 🔹 Pagination State
const totalItemsCount = ref(0);
const itemsPerPage = ref(9);
const currentPage = ref(initialParams.currentPage);

// 🔹 UI States
const showHargaMenu = ref(false);
const isFilterOpen = ref(false);
const isQuickViewOpen = ref(false);
const quickViewImage = ref('');

const openQuickView = (imageUrl) => {
  quickViewImage.value = imageUrl;
  isQuickViewOpen.value = true;
};

const closeQuickView = () => {
  isQuickViewOpen.value = false;
  quickViewImage.value = '';
};

const updateUrlWithParams = () => {
  const url = router.current();
  url.search = '';

  if (filterParams.searchQuery) url.searchParams.set('s', filterParams.searchQuery);
  if (filterParams.categoryFilter) url.searchParams.set('cat', filterParams.categoryFilter);
  if (filterParams.unitFilters.length > 0) url.searchParams.set('unit', filterParams.unitFilters.join(','));
  if (filterParams.isPromoFilter) url.searchParams.set('promo', filterParams.isPromoFilter);
  if (filterParams.sortBy) url.searchParams.set('sort', filterParams.sortBy);
  if (currentPage.value > 1) url.searchParams.set('page', currentPage.value);

  router.replace(url.toString());
};

const ADMIN_WA_NUMBER = import.meta.env.VITE_ADMIN_WA_NUMBER || '6285263759398';
const getWhatsappLink = (productName) => {
  const text = `Halo, saya tertarik dengan produk *${productName}* yang ada di katalog Anda. Apakah produk ini masih tersedia?`;
  return `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

// 🔹 Hitung total halaman berdasarkan jumlah item
const totalPages = computed(() => {
  if (totalItemsCount.value === 0 || itemsPerPage.value === 0) return 1;
  return Math.ceil(totalItemsCount.value / itemsPerPage.value)
})

const loadProducts = async () => {
  isLoading.value = true;
  isError.value = false;
  errorMessage.value = null;

  const params = {
    ...filterParams,
    currentPage: currentPage.value,
    itemsPerPage: itemsPerPage.value,
  };

  try {
    const result = await fetchProducts(params);
    products.value = result.data;
    totalItemsCount.value = result.meta.totalItems;
    itemsPerPage.value = result.meta.itemsPerPage;

    if (result.data.length === 0 && currentPage.value > 1 && totalItemsCount.value > 0) {
      currentPage.value = 1;
      loadProducts();
    }
  } catch (err) {
    isError.value = true;
    errorMessage.value = err.message;
    products.value = [];
    totalItemsCount.value = 0;
  } finally {
    isLoading.value = false;
  }
};

const loadFilters = async () => {
  categories.value = await fetchCategories();
  let fetchedUnits = await fetchUnits();
  units.value = fetchedUnits.map(unit => ({
    ...unit,
    isSelected: initialParams.unitFilters.includes(unit.id)
  }));
};

// 🔹 Fungsi untuk berpindah halaman
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
    currentPage.value = page
    window.scrollTo({
      top: 350,
      behavior: 'smooth'
    });
  }
}

// 🟢 Fungsi sorting
const setSort = (type) => {
  filterParams.sortBy = type;
  showHargaMenu.value = false;
  currentPage.value = 1;
};

// 🟢 Fungsi toggle dropdown harga
const toggleHargaDropdown = () => {
  showHargaMenu.value = !showHargaMenu.value;
};

// 🟢 Fungsi pencarian
const searchProduct = () => {
  filterParams.searchQuery = localSearchQuery.value;
  currentPage.value = 1;
};

// 🟢 Fungsi untuk toggle unit filter (checkbox)
const toggleUnitFilter = (unitId) => {
  const unit = units.value.find(u => u.id === unitId);
  if (!unit) return;

  unit.isSelected = !unit.isSelected;

  const index = localFilterParams.unitFilters.indexOf(unitId);
  if (unit.isSelected) {
    if (index === -1) localFilterParams.unitFilters.push(unitId);
  } else {
    if (index > -1) localFilterParams.unitFilters.splice(index, 1);
  }
};

// 🟢 Terapkan Filter
const applyFilter = () => {
  filterParams.categoryFilter = localFilterParams.categoryFilter;
  filterParams.isPromoFilter = localFilterParams.isPromoFilter;
  filterParams.unitFilters = [...localFilterParams.unitFilters];
  isFilterOpen.value = false;
  currentPage.value = 1;
};

// 🟢 Reset Filter
const resetFilter = () => {

  localFilterParams.categoryFilter = null;
  localFilterParams.isPromoFilter = null;
  localFilterParams.unitFilters = [];

  units.value.forEach(unit => unit.isSelected = false);

  applyFilter();
  isFilterOpen.value = false;
};

// 🟢 Watcher: Panggil loadProducts setiap kali parameter filter/sort/page berubah
watch(() => ({
  categoryFilter: filterParams.categoryFilter,
  unitFilters: filterParams.unitFilters,
  isPromoFilter: filterParams.isPromoFilter,
  sortBy: filterParams.sortBy,
  searchQuery: filterParams.searchQuery,
  currentPage: currentPage.value
}), () => {
  updateUrlWithParams();
  loadProducts();
}, { deep: true, immediate: false });


// 🟢 Ambil data filter dan produk awal saat komponen dimuat
onMounted(() => {
  loadFilters();
  loadProducts();
});

</script>

<template>
  <div>
    <div class="whatsapp-background-blob-top-right"></div>
    <div class="whatsapp-background-blob-bottom-left"></div>

    <section class="w-full pt-10 px-4 sm:px-8 md:px-16 flex justify-center">
      <div
        class="bg-[#1c1c1e] rounded-xl shadow-lg flex flex-row items-center justify-between max-w-[975px] w-full h-auto md:h-[251px] p-6 md:p-8 transition-all duration-300">
        <div class="text-white max-w-lg text-left flex-1">
          <h1 class="text-[20px] sm:text-[26px] md:text-[35px] font-extrabold leading-snug">
            Belanja Harian <span class="text-[#26A81D]">Tanpa Ribet</span>
          </h1>
          <p class="mt-3 sm:mt-4 text-gray-300 text-[13px] sm:text-[15px] md:text-[18px] leading-relaxed">
            Lihat <span class="font-semibold">katalog</span> lengkap kami dan pesan
            <span class="font-semibold">kebutuhanmu</span> langsung lewat WhatsApp.
            <span class="font-semibold">Cepat</span>, <span class="font-semibold">praktis</span>, dan
            <span class="font-semibold">hemat waktu</span>.
          </p>
        </div>

        <div class="flex justify-center items-center ml-4 sm:ml-6 flex-shrink-0 animate-float">
          <img src="/keranjang.svg" alt="Ilustrasi Belanja"
            class="w-[110px] sm:w-[180px] md:w-[270px] h-auto md:h-[235px] lg:h-[236px] drop-shadow-lg" />
        </div>
      </div>
    </section>

    <section class="w-full pt-10 px-4 sm:px-8 md:px-16 flex justify-center">
      <div class="w-full max-w-[975px]">
        <h3 class="text-xl font-bold mb-2.5">Semua Produk</h3>

        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div
            class="flex items-center w-full lg:w-[400px] border border-[#26A81D] rounded-xl overflow-hidden shadow-sm order-1 lg:order-2">
            <div class="pl-4 hidden sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#26A81D]" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input v-model="localSearchQuery" @keyup.enter="searchProduct" type="text" placeholder="Cari produk"
              class="flex-grow h-[42px] w-full px-3 text-gray-700 text-sm sm:text-base focus:outline-none" />

            <div class="flex items-center gap-1 pr-2 sm:hidden">
              <button @click="isFilterOpen = true" id="filterButton"
                class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white p-2 h-full flex items-center justify-center rounded-lg active:scale-95 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.447.832l-4 2.5A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
              </button>

              <transition name="fade">
                <div v-if="isFilterOpen"
                  class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                  @click.self="isFilterOpen = false">
                  <div class="bg-white rounded-xl shadow-2xl w-[90%] max-h-[80vh] overflow-y-auto p-5 relative">
                    <button @click="isFilterOpen = false"
                      class="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                      ✕
                    </button>

                    <h3 class="text-sm font-semibold mb-3">Filter pencarian</h3>

                    <div class="mb-4 relative">
                      <label class="block text-xs text-[#6D706E] font-semibold mb-1">Kategori</label>
                      <select v-model="localFilterParams.categoryFilter"
                        class="w-full rounded-lg text-sm font-semibold px-3 py-2 pr-10 shadow appearance-none focus:outline-none">
                        <option :value="null">Pilih kategori</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                          {{ category.name }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label class="text-gray-700 text-xs">Satuan Buah</label>
                      <div class="text-sm flex flex-col gap-2 text-black mt-1">
                        <label v-for="unit in units" :key="unit.id" class="flex items-center space-x-2 cursor-pointer">
                          <input type="checkbox" :checked="unit.isSelected" @change="toggleUnitFilter(unit.id)"
                            class="text-green-600 focus:ring-green-500" />
                          <span class="font-semibold">{{ unit.name }}</span>
                        </label>
                      </div>
                    </div>

                    <div class="mt-3">
                      <label class="text-gray-700 text-xs">Tipe Produk</label>
                      <div class="text-sm flex flex-wrap gap-4 text-black">
                        <label class="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="tipe" value="normal" v-model="filterParams.isPromoFilter"
                            class="text-green-600 focus:ring-green-500" />
                          <span class="font-semibold">Harga Normal</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="tipe" value="promo" v-model="filterParams.isPromoFilter"
                            class="text-green-600 focus:ring-green-500" />
                          <span class="font-semibold">Harga Promo</span>
                        </label>
                      </div>
                    </div>

                    <div class="flex flex-col gap-3 mt-6">
                      <button @click="applyFilter"
                        class="bg-gradient-to-r from-[#6EC568] to-[#26A81D] text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition text-[15px]">
                        Terapkan Filter
                      </button>
                      <button @click="resetFilter"
                        class="border border-[#26A81D] text-[#26A81D] font-semibold py-2 rounded-lg hover:bg-[#E9F8E8] transition text-[15px]">
                        Reset Filter
                      </button>
                    </div>
                  </div>
                </div>
              </transition>

              <button @click="searchProduct"
                class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white p-2 h-full flex items-center justify-center rounded-lg active:scale-95 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <button @click="searchProduct"
              class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-sm sm:text-[12px] lg:text-[15px]
                  px-4 m-1 rounded-xl transition-all active:scale-95 active:shadow-inner
                  whitespace-nowrap w-[50px] sm:w-[90px] lg:w-[110px] h-[37px] items-center justify-center hidden sm:flex">
              Cari Produk
            </button>
          </div>

          <div class="flex flex-wrap items-center gap-2 mt-3 md:mt-5 lg:mt-0 order-2 lg:order-1">
            <span class="font-bold text-[14px] md:text-[16px] w-full md:w-auto">
              Urutkan
            </span>
            <button @click="setSort('terlaris')" :class="[
              'px-4 py-1.5 rounded-[7px] border text-sm font-medium h-[40px] md:px-[10px] transition-all duration-200',
              filterParams.sortBy === 'terlaris'
                ? 'bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white border-transparent'
                : 'border-[#26A81D] text-[#26A81D] hover:bg-green-50'
            ]">
              Terlaris
            </button>
            <button @click="setSort('terbaru')" :class="[
              'px-4 py-1.5 rounded-[7px] border text-sm font-medium h-[40px] md:px-[10px] transition-all duration-200',
              filterParams.sortBy === 'terbaru'
                ? 'bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white border-transparent'
                : 'border-[#26A81D] text-[#26A81D] hover:bg-green-50'
            ]">
              Terbaru
            </button>

            <div class="relative">
              <button @click="toggleHargaDropdown" :class="[
                'px-4 py-1.5 rounded-[7px] flex items-center gap-1 text-sm font-medium border border-transparent hover:opacity-90 h-[40px] md:px-[10px] max-w-[90px] transition-all duration-200 text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D]',
                (filterParams.sortBy === 'harga-asc' || filterParams.sortBy === 'harga-desc')
                  ? 'text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D]'
                  : 'text-white border-green-500 hover:bg-green-50'
              ]">
                Harga
                <img src="/panah.svg" class="w-4 h-4" alt="arrow" />
              </button>

              <div v-if="showHargaMenu"
                class="absolute top-10 left-0 bg-white border border-gray-200 rounded-lg shadow-md w-48 z-10">
                <button class="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  @click="setSort('harga-asc')">
                  Termurah → Termahal
                  <span v-if="filterParams.sortBy === 'harga-asc'" class="text-[#26A81D] ml-1">✓</span>
                </button>
                <button class="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                  @click="setSort('harga-desc')">
                  Termahal → Termurah
                  <span v-if="filterParams.sortBy === 'harga-desc'" class="text-[#26A81D] ml-1">✓</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-8 items-start">
          <aside class="w-full md:w-[210px] lg:w-[260px] bg-white rounded-xl p-5 max-h-auto shadow-xl hidden sm:inline">
            <h3 class="text-sm font-semibold mb-2.5">Filter pencarian</h3>

            <div class="mb-4 relative">
              <label class="block text-xs text-[#6D706E] font-semibold mb-1">Kategori</label>
              <select v-model="localFilterParams.categoryFilter"
                class="w-full rounded-lg text-sm font-semibold px-3 py-2 pr-10 shadow appearance-none focus:outline-none">
                <option :value="null">Pilih kategori</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
              <img src="/panahhitam.svg" alt="arrow"
                class="absolute right-3 top-9 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            <div>
              <label class="text-gray-700 text-xs">Satuan Buah</label>
              <div class="text-sm flex flex-col gap-2 text-black mt-1">
                <label v-for="unit in units" :key="unit.id" class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" :checked="unit.isSelected" @change="toggleUnitFilter(unit.id)"
                    class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">{{ unit.name }}</span>
                </label>
              </div>
            </div>

            <div class="mt-3">
              <label class="text-gray-700 text-xs">Tipe Produk</label>
              <div class="text-sm flex flex-wrap gap-4 text-black">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="tipe_desktop" value="normal" v-model="localFilterParams.isPromoFilter"
                    class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">Harga Normal</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="tipe_desktop" value="promo" v-model="localFilterParams.isPromoFilter"
                    class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">Harga Promo</span>
                </label>
              </div>
            </div>

            <div class="flex flex-col gap-3 mt-6">
              <button @click="applyFilter"
                class="bg-gradient-to-r from-[#6EC568] to-[#26A81D] text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition text-[15px]">
                Terapkan Filter
              </button>
              <button @click="resetFilter"
                class="border border-[#26A81D] text-[#26A81D] font-semibold py-2 rounded-lg hover:bg-[#E9F8E8] transition text-[15px]">
                Reset Filter
              </button>
            </div>
          </aside>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">

            <div v-if="isLoading" class="col-span-full text-center py-10">
              <svg class="animate-spin h-8 w-8 text-[#26A81D] mx-auto mb-3" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <p class="text-lg font-semibold text-gray-600">Memuat produk...</p>
            </div>

            <div v-else-if="isError"
              class="col-span-full text-center py-10 bg-red-50 border border-red-300 rounded-lg p-5">
              <p class="text-lg font-bold text-red-700 mb-2">Gagal Memuat Produk! 😟</p>
              <p class="text-sm text-red-600 mb-4">{{ errorMessage }}</p>
              <BaseButton @click="loadProducts" variant="green" class="py-2.5">
                Coba Lagi
              </BaseButton>
            </div>

            <div v-else-if="products.length === 0" class="col-span-full text-center py-10 rounded-lg p-5">
              <p class="text-lg font-bold text-[#26A81D] mb-2">Produk Tidak Ditemukan 🔍</p>
              <p class="text-sm text-black">Coba kata kunci, kategori, atau filter yang berbeda.</p>
            </div>

            <div v-else v-for="item in products" :key="item.id"
              class="bg-white rounded-xl shadow overflow-hidden relative hover:shadow-lg transition-shadow duration-200">
              <div v-if="item.promo"
                class="absolute top-3 left-3 bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-[11px] px-3 py-1 rounded-md shadow">
                Produk Promo
              </div>

              <img :src="item.image" alt="Produk"
                class="w-full h-[160px] sm:h-[180px] md:h-[150px] lg:h-[160px] object-cover" />

              <div class="p-3 sm:p-4 md:p-3">
                <h4 class="text-[12px] md:text-[13px] font-extrabold mb-1 leading-snug">
                  {{ item.name }}
                </h4>
                <p class="text-[#26A81D] font-bold text-[12px] md:text-[13px] mb-1" v-if="item.stock">
                  Stok Tersedia
                </p>
                <p class="text-gray-600 font-medium text-[9px] md:text-[9.5px] leading-tight mb-1"
                  v-if="item.description">
                  {{ item.description }}
                </p>
                <div>
                  <span class="text-[14px] md:text-[15px] font-bold">
                    {{ item.priceFormatted }}
                  </span>
                  <span v-if="item.oldPrice" class="text-gray-400 text-xs line-through ml-2">
                    {{ item.oldPriceFormatted }}
                  </span>
                </div>

                <BaseButton variant="green" class="mt-3 w-full py-1.5 rounded-[10px] text-[12px] md:text-[13px]"
                  :href="getWhatsappLink(item.name)">
                  <img src="/whatsapp.svg" alt="wa" class="w-4 h-4" />
                  Pesan via WhatsApp
                </BaseButton>

                <BaseButton variant="outline"
                  class="mt-2 w-full whitespace-nowrap py-1.5 rounded-[10px] text-[12px] md:text-[13px]"
                  @click="openQuickView(item.image)">
                  Quick View
                </BaseButton>
              </div>
            </div>
            <div v-if="products.length > 0 && !isLoading" class="col-span-full">
              <Pagination :current-page="currentPage" :total-pages="totalPages" :is-loading="isLoading"
                :go-to-page="goToPage" class="flex justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <div v-if="isQuickViewOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="closeQuickView">
        <div class="bg-white rounded-lg shadow-2xl relative p-3 max-w-lg w-[90%] mx-auto">

          <button @click="closeQuickView"
            class="absolute top-0 right-0 m-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img :src="quickViewImage" alt="Quick View Produk"
            class="w-full h-auto object-contain max-h-[80vh] rounded-lg" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 480px) {
  section div div img {
    width: 100px !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>