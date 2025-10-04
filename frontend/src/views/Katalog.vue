<script setup>
import BaseButton from '@/components/BaseButton.vue';
const products = [
  {
    id: 1,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 17500,
    oldPrice: 20000,
    promo: true,
    image: "/telur.png"
  },
  {
    id: 2,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 3,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 4,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 5,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 6,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 17500,
    oldPrice: 20000,
    promo: true,
    image: "/telur.png"
  },
  {
    id: 7,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 18500,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 8,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  },
  {
    id: 9,
    name: "Telur Ayam Negeri 10 Butir",
    stock: true,
    price: 20000,
    oldPrice: null,
    promo: false,
    image: "/telur.png"
  }
]
</script>

<template>
  <!-- Background -->
  <div class="whatsapp-background-blob-top-right"></div>
  <div class="whatsapp-background-blob-bottom-left"></div> 

  <section class="w-full py-16 px-6 md:px-20 flex justify-center">
    <div class="bg-[#1c1c1e] rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between max-w-6xl w-full h-[251px] p-8">
      
      <div class="text-white max-w-lg md:pr-10">
        <h1 class="text-3xl md:text-4xl font-bold leading-snug">
          Belanja Harian <span class="text-green-500">Tanpa Ribet</span>
        </h1>
        <p class="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
          Lihat <span class="font-semibold">katalog</span> lengkap kami dan pesan
          <span class="font-semibold">kebutuhanmu</span> langsung lewat WhatsApp.
          <span class="font-semibold">Cepat</span>, <span class="font-semibold">praktis</span>, dan
          <span class="font-semibold">hemat waktu</span>.
        </p>
      </div>

      <div class="mt-8 md:mt-0">
        <img src="/keranjang.svg" alt="Ilustrasi Belanja" class="w-64 md:w-[271px] h-[250px]">
      </div>
    </div>
  </section>
  
  <!-- Section Produk -->
  <section class="w-full py-16 px-6 md:px-[145px]">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Semua Produk</h2>

    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div class="flex items-center gap-2 flex-wrap">
        <span class="font-medium">Urutkan</span>
        <button class="px-4 py-1.5 text-green-500 rounded-xl border border-green-500 font-medium">Terlaris</button>
        <button class="px-4 py-1.5 text-green-500 rounded-xl font-medium border border-green-500">Terbaru</button>
        <div class="relative">
          <button
            class="px-4 py-1.5 bg-green-500 text-white rounded-xl flex items-center gap-1"
          >
            Harga
            <img src="/panah.svg" class="w-4 h-4" alt="arrow" />
          </button>
        </div>
      </div>

      <div class="relative w-full md:w-[400px] flex">
        <input
          type="text"
          placeholder="Cari produk"
          class="w-full border-2 border-green-500 rounded-l-lg px-4 py-2 focus:outline-green-500"
        />
        <button
          class="inline-flex items-center justify-center bg-green-500 text-white px-6 h-12 border-2 border-green-500 rounded-r-lg font-medium whitespace-nowrap"
        >
          Cari Produk
        </button>
      </div>
    </div>


    <div class="flex gap-8">
      <aside class="w-full md:w-64 bg-white shadow rounded-xl p-6">
        <h3 class="font-semibold mb-4">Filter pencarian</h3>

        <div class="mb-6 relative">
          <label class="block text-sm font-medium mb-2">Kategori</label>
          
          <select
            class="w-full rounded-lg px-3 py-2 pr-10 shadow-xl appearance-none focus:outline-none"
          >
            <option>Pilih kategori</option>
            <option>Telur</option>
            <option>Sayuran</option>
            <option>Daging</option>
          </select>

          <img
            src="/panahhitam.svg"
            alt="arrow"
            class="absolute right-3 top-3/4 -translate-y-1/2 w-4 h-4 pointer-events-none"
          />
        </div>

        <div class="mb-6">
          <h4 class="font-medium mb-2">Satuan buah</h4>
          <div class="flex flex-col gap-3 text-sm">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="satuan"
                class="w-5 h-5 rounded-full border-2 border-black appearance-none checked:border-green-500 checked:bg-green-500"
              />
              Pcs, Butir, Buah
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="satuan"
                class="w-5 h-5 rounded-full border-2 border-black appearance-none checked:border-green-500 checked:bg-green-500"
                checked
              />
              Bundling (Berat, Ikat)
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="satuan"
                class="w-5 h-5 rounded-full border-2 border-black appearance-none checked:border-green-500 checked:bg-green-500"
              />
              Karton, Box
            </label>
          </div>
        </div>

        <div>
          <h4 class="font-medium mb-2 text-gray-500">Tipe produk</h4>
          <div class="flex flex-col gap-3 text-sm">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipe"
                class="w-5 h-5 rounded-full border-2 border-black appearance-none checked:border-green-500 checked:bg-green-500"
              />
              Harga normal
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipe"
                class="w-5 h-5 rounded-full border-2 border-black appearance-none checked:border-green-500 checked:bg-green-500"
                checked
              />
              Harga promo
            </label>
          </div>
        </div>
      </aside>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        <div
          v-for="item in products"
          :key="item.id"
          class="bg-white rounded-xl shadow overflow-hidden relative"
        >
          <div
            v-if="item.promo"
            class="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-md shadow"
          >
            Produk Promo
          </div>

          <img
            :src="item.image"
            alt="Produk"
            class="w-full h-44 object-cover"
          />

          <div class="p-4">
            <h4 class="font-semibold text-base">{{ item.name }}</h4>
            <p
              class="text-green-600 text-sm mt-1"
              v-if="item.stock"
            >
              Stok Tersedia
            </p>
            <div class="mt-2">
              <span class="font-bold text-lg">
                Rp{{ item.price.toLocaleString("id-ID") }}
              </span>
              <span
                v-if="item.oldPrice"
                class="text-gray-400 text-sm line-through ml-2"
              >
                Rp{{ item.oldPrice.toLocaleString("id-ID") }}
              </span>
            </div>

            <BaseButton variant="green" class="mt-3 w-full">
              <img src="/whatsapp.svg" alt="wa" class="w-4 h-4" />
              Pesan via WhatsApp
            </BaseButton>

            <BaseButton variant="outline" class="mt-2 w-full">
              Quick View
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
