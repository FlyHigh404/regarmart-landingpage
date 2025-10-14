<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";

// 🟢 State utama
const sortBy = ref("");
const showHargaMenu = ref(false);
const searchQuery = ref("");
const isFilterOpen = ref(false); // <— tambahkan ini!

// 🟢 Fungsi sorting
const setSort = (type) => {
  sortBy.value = type;
  showHargaMenu.value = false;
  console.log("Sort by:", type);
};

// 🟢 Fungsi toggle dropdown harga
const toggleHargaDropdown = () => {
  showHargaMenu.value = !showHargaMenu.value;
};

// 🟢 Fungsi pencarian
const searchProduct = () => {
  console.log("Searching for:", searchQuery.value);
};

// 🟢 Data produk
const products = ref([
  {
    id: 1,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 2,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 3,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 4,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 5,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 6,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 17500,
    oldPrice: 20000,
    promo: true,
    image: "/telur.png",
  },
  {
    id: 7,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 18500,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 8,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
  {
    id: 9,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png",
  },
]);
</script>


<template>
  <div class="whatsapp-background-blob-top-right"></div>
  <div class="whatsapp-background-blob-bottom-left"></div>

  <!-- Section Hero -->
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

      <div
        class="flex justify-center items-center ml-4 sm:ml-6 flex-shrink-0 animate-float"
      >
        <img
          src="/keranjang.svg"
          alt="Ilustrasi Belanja"
          class="w-[110px] sm:w-[180px] md:w-[270px] h-auto md:h-[235px] lg:h-[236px] drop-shadow-lg"
        />
      </div>
    </div>
  </section>

  <!-- Section Produk -->
  <section class="w-full pt-10 px-4 sm:px-8 md:px-16 flex justify-center">
    <div class="w-full max-w-[975px]">
      <h3 class="text-xl font-bold mb-2.5">Semua Produk</h3>      
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div class="flex items-center w-full lg:w-[400px] border border-[#26A81D] rounded-xl overflow-hidden shadow-sm order-1 lg:order-2">
          <div class="pl-4 hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#26A81D]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari produk"
            class="flex-grow h-[42px] w-full px-3 text-gray-700 text-sm sm:text-base focus:outline-none"
          />

          <div class="flex items-center gap-1 pr-2 sm:hidden">
            <!-- Tombol Filter -->
            <button
              @click="isFilterOpen = true"
              id="filterButton"
              class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white p-2 h-full flex items-center justify-center rounded-lg active:scale-95 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.447.832l-4 2.5A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>

            <transition name="fade">
              <div
                v-if="isFilterOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                @click.self="isFilterOpen = false"
              >
                <div
                  class="bg-white rounded-xl shadow-2xl w-[90%] max-h-[80vh] overflow-y-auto p-5 relative"
                >
                  <button
                    @click="isFilterOpen = false"
                    class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>

                  <h3 class="text-sm font-semibold mb-3">Filter pencarian</h3>

                  <div class="mb-4 relative">
                    <label class="block text-xs text-[#6D706E] font-semibold mb-1">Kategori</label>
                    <select class="w-full rounded-lg text-sm font-semibold px-3 py-2 pr-10 shadow appearance-none focus:outline-none">
                      <option>Pilih kategori</option>
                      <option>Telur</option>
                      <option>Sayuran</option>
                      <option>Daging</option>
                    </select>
                  </div>

                  <div>
                    <label class="text-gray-700 text-xs">Satuan Buah</label>
                    <div class="text-sm flex flex-wrap gap-4 text-black">
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                        <span class="font-semibold">Pcs, Butir, Buah</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                        <span class="font-semibold">Bundling (Berat, Ikat)</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                        <span class="font-semibold">Karton, Box</span>
                      </label>
                    </div>
                  </div>

                  <div class="mt-3">
                    <label class="text-gray-700 text-xs">Tipe Produk</label>
                    <div class="text-sm flex flex-wrap gap-4 text-black">
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="tipe" class="text-green-600 focus:ring-green-500" />
                        <span class="font-semibold">Harga Normal</span>
                      </label>
                      <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="tipe" class="text-green-600 focus:ring-green-500" />
                        <span class="font-semibold">Harga Promo</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex flex-col gap-3 mt-6">
                    <button
                      class="bg-gradient-to-r from-[#6EC568] to-[#26A81D] text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition text-[15px]">
                      Terapkan Filter
                    </button>
                    <button
                      class="border border-[#26A81D] text-[#26A81D] font-semibold py-2 rounded-lg hover:bg-[#E9F8E8] transition text-[15px]">
                      Reset Filter
                    </button>
                  </div>
                </div>
              </div>
            </transition>
            
            <button
              @click="searchProduct"
              class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white p-2 h-full flex items-center justify-center rounded-lg active:scale-95 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <button
            @click="searchProduct"
            class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-sm sm:text-[12px] lg:text-[15px]
                  px-4 m-1 rounded-xl transition-all active:scale-95 active:shadow-inner
                  whitespace-nowrap w-[50px] sm:w-[90px] lg:w-[110px] h-[37px] items-center justify-center hidden sm:flex"
          >
            Cari Produk
          </button>
        </div>

        <div
          class="flex flex-wrap items-center gap-2 mt-3 md:mt-5 lg:mt-0 order-2 lg:order-1"
        >
          <span class="font-bold text-[14px] md:text-[16px] w-full md:w-auto">
            Urutkan
          </span>
          <button
            @click="setSort('terlaris')"
            :class="[
              'px-4 py-1.5 rounded-[7px] border text-sm font-medium h-[40px] md:px-[10px] transition-all duration-200',
              sortBy === 'terlaris'
                ? 'bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white border-transparent'
                : 'border-green-500 text-green-500 hover:bg-green-50'
            ]"
          >
            Terlaris
          </button>
          <button
            @click="setSort('terbaru')"
            :class="[
              'px-4 py-1.5 rounded-[7px] border text-sm font-medium h-[40px] md:px-[10px] transition-all duration-200',
              sortBy === 'terbaru'
                ? 'bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white border-transparent'
                : 'border-green-500 text-green-500 hover:bg-green-50'
            ]"
          >
            Terbaru
          </button>

          <div class="relative">
            <button
              @click="toggleHargaDropdown"
              class="px-4 py-1.5 rounded-[7px] flex items-center gap-1 text-sm font-medium border border-transparent
                      text-white bg-gradient-to-br from-[#6EC568] to-[#26A81D] hover:opacity-90 h-[40px] md:px-[10px] max-w-[90px]"
            >
              Harga
              <img src="/panah.svg" class="w-4 h-4" alt="arrow" />
            </button>

            <div
              v-if="showHargaMenu"
              class="absolute top-10 left-0 bg-white border border-gray-200 rounded-lg shadow-md w-36 z-10"
            >
              <button
                class="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                @click="setSort('harga-asc')"
              >
                Termurah → Termahal
              </button>
              <button
                class="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                @click="setSort('harga-desc')"
              >
                Termahal → Termurah
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Filter Pencarian-->
      <div class="flex gap-8 items-start">
        <aside class="w-full md:w-[210px] lg:w-[260px] bg-white rounded-xl p-5 max-h-[335px] overflow-y-auto shadow-xl hidden sm:inline">
          <h3 class="text-sm font-semibold mb-2.5">Filter pencarian</h3>
          
          <div class="mb-4 relative">
            <label class="block text-xs text-[#6D706E] font-semibold mb-1">Kategori</label>
            <select class="w-full rounded-lg text-sm font-semibold px-3 py-2 pr-10 shadow appearance-none focus:outline-none">
              <option>Pilih kategori</option>
              <option>Telur</option>
              <option>Sayuran</option>
              <option>Daging</option>
            </select>
            <img src="/panahhitam.svg" alt="arrow" class="absolute right-3 top-9 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>

          <div>
            <label class="text-gray-700 text-xs">Satuan Buah</label>
            <div class="text-sm flex flex-wrap gap-4 text-black">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                <span class="font-semibold">Pcs, Butir, Buah</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                <span class="font-semibold">Bundling (Berat, Ikat)</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" name="satuan[]" class="text-green-600 focus:ring-green-500" />
                <span class="font-semibold">Karton, Box</span>
              </label>
            </div>
          </div>

          <div class="mt-3">
            <label class="text-gray-700 text-xs">Tipe Produk</label>
            <div class="text-sm flex flex-wrap gap-4 text-black">
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="tipe" class="text-green-600 focus:ring-green-500" />
                <span class="font-semibold">Harga Normal</span>
              </label>
              <label class="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="tipe" class="text-green-600 focus:ring-green-500" />
                <span class="font-semibold">Harga Promo</span>
              </label>
            </div>
          </div>
          <div class="flex flex-col gap-3 mt-6">
            <button
              class="bg-gradient-to-r from-[#6EC568] to-[#26A81D] text-white font-semibold py-2 rounded-lg shadow hover:opacity-90 transition text-[15px]">
              Terapkan Filter
            </button>
            <button
              class="border border-[#26A81D] text-[#26A81D] font-semibold py-2 rounded-lg hover:bg-[#E9F8E8] transition text-[15px]">
              Reset Filter
            </button>
          </div>
        </aside>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          <div
            v-for="item in products"
            :key="item.id"
            class="bg-white rounded-xl shadow overflow-hidden relative hover:shadow-lg transition-shadow duration-200"
          >
            <div
              v-if="item.promo"
              class="absolute top-3 left-3 bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-[11px] px-3 py-1 rounded-md shadow"
            >
              Produk Promo
            </div>

            <img
              :src="item.image"
              alt="Produk"
              class="w-full h-[160px] sm:h-[180px] md:h-[150px] lg:h-[160px] object-cover"
            />

            <div class="p-3 sm:p-4 md:p-3">
              <h4 class="text-[14px] md:text-[15px] font-extrabold mb-1 leading-snug">
                {{ item.name }}
              </h4>
              <p
                class="text-green-600 font-bold text-[12px] md:text-[13px] mb-1"
                v-if="item.stock"
              >
                Stok Tersedia
              </p>
              <p
                class="text-gray-600 font-medium text-[11px] md:text-[12px] leading-tight mb-1"
                v-if="item.stock"
              >
                Telur ayam negeri segar, kaya protein dan gizi. Ideal untuk masakan sehari-hari.
              </p>
              <div>
                <span class="text-[14px] md:text-[15px] font-bold">
                  Rp{{ item.price.toLocaleString("id-ID") }}
                </span>
                <span
                  v-if="item.oldPrice"
                  class="text-gray-400 text-xs line-through ml-2"
                >
                  Rp{{ item.oldPrice.toLocaleString("id-ID") }}
                </span>
              </div>

              <BaseButton
                variant="green"
                class="mt-3 w-full whitespace-nowrap text-white py-1.5 rounded-[10px] text-center text-[12px] md:text-[13px]">
                <img src="/whatsapp.svg" alt="wa" class="w-4 h-4" />
                Pesan via WhatsApp
              </BaseButton>

              <BaseButton
                variant="outline"
                class="mt-2 w-full whitespace-nowrap py-1.5 rounded-[10px] text-[12px] md:text-[13px]"
              >
                Quick View
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 480px) {
  section div div img {
    width: 100px !important;
  }
}
</style>
