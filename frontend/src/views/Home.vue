<template>
  <div class="px-4 sm:px-8 md:px-16 lg:px-[145px] max-w-[1270px] mx-auto">
    <div class="whatsapp-background-blob-top-right"></div>
    <div class="whatsapp-background-blob-bottom-left"></div>
    <section id="hero" class="pt-5 sm:pt-10">
      <div class="container mx-auto">
        <h1 class="text-2xl sm:text-3xl lg:text-[38px] font-extrabold mb-4 text-center">
          <span v-for="(text, index) in $tm('hero.title')" :key="index" :class="{
            'text-[#26A81D]': [1, 2].includes(index),
            'text-[#1B1F1B]': ![1, 2].includes(index)
          }">
            {{ $rt(text) }}
            <br v-if="index === 1" />
          </span>
        </h1>
        <p class="text-[#6D706E] text-center text-sm sm:text-[18px] mx-auto max-w-2xl" v-html="$t('hero.subtitle')"></p>
        <img :src="customerSatisfactionBadge" alt="Customer Satisfaction Badge"
          class="customer-satisfaction-badge hidden lg:block" />
        <div class="container mx-auto mt-5 sm:mt-7">

          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

            <div class="lg:col-span-2 space-y-4">

              <div class="bg-white rounded-xl shadow-md p-4 mx-auto">
                <div class="relative mb-4 border border-green-500 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" :placeholder="$t('searchPlaceholder')"
                    class="w-full pl-10 pr-4 py-2 border-none rounded-lg focus:outline-none focus:ring-0 text-sm"
                    v-model="searchQuery" @keyup.enter="searchProducts" />
                </div>

                <h3 class="text-sm font-bold mb-3 text-[#1B1F1B]">{{ $t('filterText') }}</h3>

                <div class="mb-4">
                  <label class="block text-gray-700 text-xs mb-2">{{ $t('categoryLabel') }}</label>
                  <div class="relative">
                    <select
                      class="text-sm w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none bg-white font-semibold pr-10"
                      v-model="selectedCategory">
                      <option value="">{{ $t('selectCategoryPlaceholder') }}</option>
                      <option v-for="category in categories" :key="category.id" :value="category.id">
                        {{ category.name }}
                      </option>
                    </select>
                    <svg
                      class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label class="text-gray-700 text-xs block mb-2">{{ $t('unitLabel') }}</label>
                  <div class="text-sm flex flex-wrap gap-2 text-black">
                    <label v-for="unit in units" :key="unit.id" class="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" name="satuan"
                        class="form-radio text-green-600 focus:ring-green-500 h-4 w-4" :value="unit.id"
                        v-model="selectedUnit" />
                      <span class="font-semibold">{{ unit.name }}</span>
                    </label>
                  </div>
                </div>

                <button
                  class="w-full mt-3 bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-sm py-2 rounded-lg transition-colors shadow-md font-semibold cursor-pointer hover:from-[#57b04a] hover:to-[#1f8c1a]"
                  @click="searchProducts">
                  {{ $t('buttons.search') }}
                </button>
              </div>

              <div class="p-5 pl-7 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 class="text-sm font-bold mb-3">{{ $t('searchHistory') }}</h3>

                <div v-if="isHistoryLoading" class="text-center text-gray-500 text-sm py-4">
                  {{ locale === "id" ? "Memuat riwayat..." : "Loading history..." }}
                </div>

                <div v-else-if="historyError" class="text-center text-red-500 text-sm py-4">
                  <p>{{ historyError }}</p>
                  <button @click="fetchSearchHistories" class="mt-2 text-green-600 hover:text-green-800 text-xs">
                    {{ locale === "id" ? "Coba lagi" : "Try again" }}
                  </button>
                </div>

                <div v-else-if="!histories || histories.length === 0" class="text-center text-gray-500 text-sm py-4">
                  {{ locale === "id" ? "Belum ada riwayat pencarian." : "No search history yet." }}
                </div>

                <ul v-else class="text-sm text-semibold space-y-4">
                  <li v-for="history in histories" :key="history.id"
                    @click="handleSearchAgain(history.searchTerm || history.search_term)"
                    class="flex justify-between items-center text-gray-700 cursor-pointer transition-colors hover:text-green-600 hover:bg-green-50 p-0.5 rounded">
                    <span class="truncate flex-1">{{ history.searchTerm || history.search_term }}</span>

                    <svg xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </li>
                </ul>
              </div>

            </div>

            <div class="lg:col-span-2 flex flex-col py-2">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg sm:text-xl font-bold text-[#1B1F1B]">{{ $t('bestSellerText') }}</h2>
                <div class="flex space-x-1">
                  <button @click="prevBestSeller"
                    class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-300 rounded-[6px] text-black hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                    &lt;
                  </button>
                  <button @click="nextBestSeller"
                    class="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-300 rounded-[6px] text-black hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                    &gt;
                  </button>
                </div>
              </div>

              <div v-if="isBestSellerLoading" class="text-center py-10 text-gray-500">
                {{ locale === "id" ? "Memuat produk terlaris..." : "Loading best seller products..." }}
              </div>
              <div v-else-if="bestSellerError" class="text-center py-10 text-red-500">
                {{ locale === "id" ? `Gagal memuat data: ${bestSellerError}` : `Failed to load data: ${bestSellerError}`
                }}
              </div>
              <div v-else-if="bestSellers.length === 0" class="text-center py-10 text-gray-500">
                {{ locale === "id" ? "Belum ada produk terlaris saat ini." : "There are currently no best seller products." }}
              </div>
              <div v-else class="relative overflow-hidden">
                <div class="overflow-visible">
                  <div class="flex transition-transform duration-500 ease-in-out pb-4" :style="{
                    transform: `translateX(-${(currentBestSellerIndex / itemsPerSlideComputed) * 100}%)`
                  }">
                    <div v-for="(product, index) in [...bestSellers, ...bestSellers]" :key="`${product.id}-${index}`"
                      class="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col flex-shrink-0"
                      :class="{
                        'w-full mx-0': itemsPerSlideComputed === 1,
                        'w-1/2 md:w-1/2 lg:w-1/2 px-2': itemsPerSlideComputed > 1,
                        'min-w-full': itemsPerSlideComputed === 1,
                        'min-w-[50%]': itemsPerSlideComputed > 1,
                      }">

                      <div class="flex justify-center items-center h-40 sm:h-36 bg-gray-50 rounded-t-xl overflow-hidden">
                    <img :src="product.imageUrl || 'https://placehold.co/100x100'" :alt="product.name"
                      class="h-full w-full object-cover" />
                  </div>

                  <div class="p-3 sm:p-4 flex flex-col flex-grow">
                    <h3 class="text-sm font-bold mb-1 line-clamp-2">{{ product.name }}</h3>
                    <p :class="[product.stock > 0 ? 'text-green-600' : 'text-red-500']"
                      class="font-semibold text-[10px] sm:text-[12px] mb-1">
                      {{ product.stock > 0 ? $t('availableStock') : $t('notAvailableStock') }}
                    </p>
                    <p class="text-gray-600 text-[9px] sm:text-[10px] mb-2 flex-grow line-clamp-3">
                      {{ product.description || '-' }}
                    </p>

                        <div class="mb-3">
                          <span v-if="product.isPromo" class="text-[14px] sm:text-[16px] font-bold">
                            Rp{{
                              product.promoPrice
                                ? Number(product.promoPrice).toLocaleString('id-ID', {
                                  minimumFractionDigits: 0, maximumFractionDigits: 0
                                })
                                : 'N/A'
                            }}
                          </span>
                          <span v-else class="text-[14px] sm:text-[16px] font-bold">
                            Rp{{
                              product.basePrice
                                ? Number(product.basePrice).toLocaleString('id-ID', {
                                  minimumFractionDigits: 0, maximumFractionDigits: 0
                                })
                                : 'N/A'
                            }}
                          </span>
                          <span v-if="product.isPromo" class="text-gray-400 text-xs line-through ml-2">
                            Rp{{
                              product.basePrice
                                ? Number(product.basePrice).toLocaleString('id-ID', {
                                  minimumFractionDigits: 0, maximumFractionDigits: 0
                                })
                                : 'N/A'
                            }}
                          </span>
                        </div>

                        <div class="space-y-2 mt-auto">
                          <a :href="product.whatsappLink"
                        target="_blank"
                        class="flex gap-1 items-center justify-center bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white py-2 rounded-[10px] text-center transition-colors text-[11px] sm:text-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 20 21" fill="none">
                          <path
                            d="M14.6548 11.8156L12.1548 10.5656C12.0563 10.5166 11.9467 10.4944 11.837 10.5012C11.7273 10.5081 11.6213 10.5438 11.5298 10.6047L10.3821 11.3703C9.85526 11.0807 9.42171 10.6471 9.13209 10.1203L9.89772 8.97266C9.95863 8.88112 9.99432 8.77514 10.0012 8.6654C10.008 8.55567 9.98582 8.44606 9.93678 8.34766L8.68678 5.84766C8.63497 5.74302 8.55489 5.655 8.45561 5.59355C8.35633 5.5321 8.24182 5.4997 8.12506 5.5C7.29626 5.5 6.50141 5.82924 5.91536 6.41529C5.3293 7.00134 5.00006 7.7962 5.00006 8.625C5.00213 10.4477 5.72712 12.1952 7.01599 13.4841C8.30485 14.7729 10.0523 15.4979 11.8751 15.5C12.2854 15.5 12.6918 15.4192 13.0709 15.2621C13.4501 15.1051 13.7946 14.8749 14.0848 14.5847C14.375 14.2945 14.6051 13.95 14.7622 13.5709C14.9192 13.1917 15.0001 12.7854 15.0001 12.375C15.0001 12.2589 14.9679 12.145 14.9069 12.0462C14.8459 11.9474 14.7586 11.8676 14.6548 11.8156ZM11.8751 14.25C10.3837 14.2483 8.95395 13.6552 7.89942 12.6006C6.84488 11.5461 6.25172 10.1163 6.25006 8.625C6.24994 8.1915 6.40004 7.77135 6.6748 7.43605C6.94956 7.10075 7.33202 6.87101 7.75709 6.78594L8.65397 8.58281L7.89069 9.71875C7.83365 9.80431 7.7986 9.90262 7.78866 10.005C7.77871 10.1073 7.79417 10.2105 7.83366 10.3055C8.28083 11.3683 9.12633 12.2138 10.1891 12.6609C10.2844 12.7022 10.3884 12.7191 10.4917 12.7101C10.5951 12.7011 10.6946 12.6665 10.7813 12.6094L11.9227 11.8484L13.7196 12.7453C13.6339 13.1709 13.4031 13.5535 13.0667 13.8279C12.7304 14.1023 12.3092 14.2515 11.8751 14.25ZM10.0001 2.375C8.5973 2.37469 7.21836 2.73757 5.99745 3.4283C4.77654 4.11904 3.75526 5.1141 3.03301 6.31664C2.31077 7.51918 1.91216 8.88822 1.87599 10.2905C1.83983 11.6928 2.16733 13.0806 2.82663 14.3188L1.93991 16.9789C1.86646 17.1992 1.8558 17.4355 1.90913 17.6615C1.96245 17.8874 2.07765 18.0941 2.24182 18.2582C2.40599 18.4224 2.61264 18.5376 2.8386 18.5909C3.06456 18.6443 3.30091 18.6336 3.52116 18.5602L6.18131 17.6734C7.27098 18.253 8.47836 18.5767 9.7118 18.62C10.9453 18.6633 12.1724 18.425 13.3 17.9232C14.4276 17.4215 15.426 16.6694 16.2196 15.7241C17.0132 14.7789 17.5809 13.6652 17.8798 12.4678C18.1788 11.2703 18.2009 10.0205 17.9447 8.81315C17.6885 7.60584 17.1605 6.47276 16.401 5.49993C15.6415 4.52711 14.6703 3.74009 13.5612 3.19864C12.4521 2.65718 11.2343 2.37551 10.0001 2.375ZM10.0001 17.375C8.79145 17.3758 7.60405 17.0575 6.55788 16.4523C6.48128 16.4079 6.39612 16.3803 6.30803 16.3713C6.21995 16.3622 6.13095 16.372 6.04694 16.4L3.12506 17.375L4.09928 14.4531C4.12737 14.3692 4.13729 14.2802 4.1284 14.1921C4.11951 14.104 4.09201 14.0188 4.04772 13.9422C3.28989 12.632 2.98562 11.1083 3.18212 9.60747C3.37862 8.10667 4.0649 6.71267 5.13451 5.64171C6.20411 4.57076 7.59725 3.88271 9.09779 3.68431C10.5983 3.48592 12.1224 3.78826 13.4336 4.54444C14.7448 5.30062 15.7698 6.46837 16.3496 7.86652C16.9293 9.26468 17.0315 10.8151 16.6402 12.2773C16.249 13.7394 15.3861 15.0316 14.1855 15.9533C12.9849 16.875 11.5137 17.3748 10.0001 17.375Z"
                            fill="#FAFAFA" />
                        </svg>
                        {{ $t('buttons.orderViaWhatsApp') }}
                      </a>
                          <button @click="openQuickView(product.imageUrl || 'https://placehold.co/100x100')"
                            class="w-full bg-gray-100 hover:bg-gray-200 text-black py-2 rounded-[10px] transition-colors text-[11px] sm:text-[12px] cursor-pointer">
                            {{ $t('buttons.quickView') }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="keunggulan" class="pt-10 sm:pt-20">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">
          <span v-for="(text, index) in $tm('advantages.title')" :key="index" :class="index === 1 ? 'text-[#26A81D]' : 'text-[#1B1F1B]'
            ">
            {{ $rt(text) }}
          </span>
        </h2>
        <p class="text-[#6D706E] text-sm sm:text-[18px] mx-auto mb-6 sm:mb-8 max-w-3xl"
          v-html="$t('advantages.subtitle')"></p>
        <div class="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          <div
            class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px] transition duration-400 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            v-for="adv in advantages" :key="adv.title">
            <div class="w-full h-48 overflow-hidden"> <img :src="adv.image" :alt="adv.title"
                class="h-full w-full object-cover">
            </div>
            <div class="px-5 py-6 sm:px-9 sm:py-8 flex flex-col flex-grow">
              <h3 class="font-extrabold mb-3 text-[#26A81D] text-left text-base sm:text-lg">
                {{ adv.title }}
              </h3>
              <p class="text-[13px] sm:text-[14px] text-gray-700 text-left">
                {{ adv.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="pt-10 sm:pt-20 pb-10">
      <div class="container mx-auto">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800">
          <span class="text-[#26A81D]">{{ $t('faqTitle1') }} </span>{{ $t('faqTitle2') }}
        </h2>

        <div v-if="isFaqLoading" class="text-center p-10 text-gray-500">
          {{ locale === "id" ? "Memuat pertanyaan dan jawaban..." : "Loading questions and answers..." }}
        </div>

        <div v-else-if="faqError"
          class="text-center p-10 text-red-700 bg-red-100 border border-red-400 rounded-lg mx-auto max-w-lg">
          Error: {{ error }}
        </div>

        <div v-else-if="faqData.length > 0" class="space-y-3 sm:space-y-4">
          <div v-for="(item, index) in faqData" :key="item.id || index"
            class="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <div @click="toggleFaq(index)"
              class="p-3 sm:p-4 flex justify-between items-center cursor-pointer select-none">
              <h3 class="pl-2 text-sm sm:text-[16px] font-semibold text-gray-700">
                {{ item.question }}
              </h3>

              <div
                class="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0"
                :class="{ 'rotate-180 bg-gradient-to-br from-[#BCE4B9] to-[#26A81D] text-white': activeIndex === index, 'bg-gray-100 text-[#26A81D]': activeIndex !== index }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2"
                  :class="{ 'text-white': activeIndex === index, 'text-[#26A81D]': activeIndex !== index }">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave"
              @leave="leave">
              <div v-show="activeIndex === index" class="px-4 pb-4 sm:px-6 sm:pb-6 pt-0 accordion-content">
                <p class="text-[#26A81D] border-t border-gray-200 pt-3 sm:pt-4 text-sm sm:text-[16px]">
                  {{ item.answer }}
                </p>
              </div>
            </transition>
          </div>
        </div>

        <div v-else class="text-center p-10 text-gray-500">
          {{ locale === "id" ? "Data FAQ kosong." : "FAQ is empty." }}
        </div>

      </div>
    </section>
    <transition name="fade">
      <div v-if="isQuickViewOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="closeQuickView">
        <div class="bg-white rounded-lg shadow-2xl relative p-3 max-w-lg w-[90%] mx-auto">

          <button @click="closeQuickView"
            class="absolute top-0 right-0 m-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 cursor-pointer">
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

<script setup>
import { useHead } from '@vueuse/head'
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import {
  fetchCategories as apiFetchCategories,
  fetchUnits as apiFetchUnits
} from '@/services/productService';
import { getFaqs } from '../api/faq';
import { getSearchHistories } from '@/services/searchHistoryService';
import { getBestSellers } from '../api/product';
import { useI18n } from 'vue-i18n';

useHead({
  title: 'Regar Mart - Solusi Belanja Kebutuhan Harian via WhatsApp',
  meta: [
    {
      name: 'description',
      content: 'Regar Mart memudahkan Anda berbelanja kebutuhan harian melalui WhatsApp. Nikmati harga terjangkau, produk berkualitas, dan layanan cepat di Surabaya.',
    },
    {
      name: 'keywords',
      content: 'Regar Mart, belanja kebutuhan harian, belanja via WhatsApp, produk harian Surabaya, layanan pengiriman cepat, produk berkualitas, harga terjangkau',
    },
    {
      property: 'og:title',
      content: 'Regar Mart - Solusi Belanja Kebutuhan Harian via WhatsApp',
    },
    {
      property: 'og:description',
      content: 'Regar Mart memudahkan Anda berbelanja kebutuhan harian melalui WhatsApp. Nikmati harga terjangkau, produk berkualitas, dan layanan cepat di Surabaya.',
    },
  ],
});

const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;
const router = useRouter();

// Pencarian (State)
const searchQuery = ref('');
const selectedCategory = ref('');
const selectedUnit = ref([]);

// Data Master & Konten (State)
const categories = ref([]);
const units = ref([]);
const faqData = ref([]);
const bestSellers = ref([]);
const histories = ref([]);

// Status Loading & Error (State)
const isCategoryLoading = ref(true);
const isUnitLoading = ref(true);
const isFaqLoading = ref(true);
const isBestSellerLoading = ref(true);
const isHistoryLoading = ref(true);

const bestSellerError = ref(null);
const historyError = ref(null);
const error = ref(null);

// FAQ
const activeIndex = ref(null);

// Slider Produk Terlaris
const currentBestSellerIndex = ref(0);
let autoSlideInterval = null;
const isTransitioning = ref(false);
const windowWidth = ref(window.innerWidth);

// Quick View State
const isQuickViewOpen = ref(false);
const quickViewImage = ref('');

const itemsPerSlideComputed = computed(() => {
  return windowWidth.value < 768 ? 1 : 2;
});

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Fungsi SLIDER PRODUK TERLARIS 
function nextBestSeller() {
  const step = itemsPerSlideComputed.value;
  if (bestSellers.value.length === 0 || isTransitioning.value) return;

  isTransitioning.value = true;

  if (currentBestSellerIndex.value + step >= bestSellers.value.length) {
    currentBestSellerIndex.value = 0;
  } else {
    currentBestSellerIndex.value += step;
  }

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
}

function prevBestSeller() {
  const step = itemsPerSlideComputed.value;
  if (bestSellers.value.length === 0 || isTransitioning.value) return;

  isTransitioning.value = true;

  if (currentBestSellerIndex.value - step < 0) {
    const totalItems = bestSellers.value.length;
    const maxIndex = Math.floor((totalItems - 1) / step) * step;
    currentBestSellerIndex.value = maxIndex;
  } else {
    currentBestSellerIndex.value -= step;
  }

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
}

const { t, locale } = useI18n();

// Image Customer Satisfaction Badge
const customerSatisfactionBadge = computed(() => {
  return locale.value === 'eng' ? '/beranda_eng.png' : '/beranda.png';
});

// Advantages
const advantages = computed(() => {
  return [
    {
      title: t('advantages.adv1.title'),
      description: t('advantages.adv1.description'),
      image: '/keunggulan1.png'
    },
    {
      title: t('advantages.adv2.title'),
      description: t('advantages.adv2.description'),
      image: '/keunggulan2.png'
    },
    {
      title: t('advantages.adv3.title'),
      description: t('advantages.adv3.description'),
      image: '/keunggulan3.png'
    }
  ];
});

function startAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  autoSlideInterval = setInterval(() => {
    nextBestSeller();
  }, 5000);
}

// Fungsi Quick View
const openQuickView = (imageUrl) => {
  quickViewImage.value = imageUrl;
  isQuickViewOpen.value = true;
};

const closeQuickView = () => {
  isQuickViewOpen.value = false;
  quickViewImage.value = '';
};

// RIWAYAT PENCARIAN
async function fetchSearchHistories() {
  isHistoryLoading.value = true;
  historyError.value = null;
  try {
    const data = await getSearchHistories();

    histories.value = Array.isArray(data) ? data : [];
  } catch (err) {
    historyError.value = err.message;
    histories.value = [];
    console.error('Error fetching search histories:', err);
  } finally {
    isHistoryLoading.value = false;
  }
}
function handleSearchAgain(searchTerm) {
  const term = searchTerm || history.search_term;
  searchQuery.value = term;

  router.push({
    name: 'Katalog',
    query: { s: term }
  });
}

// KATEGORI 
async function fetchCategories(lang) {
  isCategoryLoading.value = true;
  try {
    const fetchedCategories = await apiFetchCategories(lang);
    categories.value = fetchedCategories;
    if (fetchedCategories.length > 0) {
      selectedCategory.value = '';
    }
  } catch (err) {
  } finally {
    isCategoryLoading.value = false;
  }
}

// UNIT 
async function fetchUnits(lang) {
  isUnitLoading.value = true;
  try {
    const response = await apiFetchUnits(lang);
    units.value = response.data || response;
  } catch (err) {
  } finally {
    isUnitLoading.value = false;
  }
}

// FAQ 
async function fetchFaqs(lang) {
  isFaqLoading.value = true;
  error.value = null;
  try {
    const data = await getFaqs(lang);
    faqData.value = data;
  } catch (err) {
    error.value = err.message || 'Terjadi kesalahan saat mengambil data FAQ.';
  } finally {
    isFaqLoading.value = false;
  }
}

// BEST SELLERS
async function fetchBestSellers(lang) {
  isBestSellerLoading.value = true;
  bestSellerError.value = null;
  try {
    const data = await getBestSellers(lang);
    bestSellers.value = data;
  } catch (err) {
    bestSellerError.value = err.message || 'Gagal mengambil data produk terlaris.';
  } finally {
    isBestSellerLoading.value = false;
  }
}

// TOGGLE FAQ 
function toggleFaq(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

// ANIMASI FAQ 
const beforeEnter = (el) => { el.style.height = '0'; };
const enter = (el) => { el.style.height = el.scrollHeight + 'px'; };
const beforeLeave = (el) => { el.style.height = el.scrollHeight + 'px'; };
const leave = (el) => { el.style.height = '0'; };

// PENCARIAN
async function searchProducts() {
  const term = searchQuery.value.trim();
  if (!term) {
    if (!selectedCategory.value && selectedUnit.value.length === 0) {
      alert("Mohon masukkan kata kunci pencarian atau pilih filter.");
      return;
    }
  }

  const query = {};

  if (term) query.s = term;
  if (selectedCategory.value) query.cat = selectedCategory.value;
  if (selectedUnit.value.length > 0) query.unit = selectedUnit.value.join(',');

  try {
    if (term) {
      await axios.get(`${API_BASE_URL}/products?search=${term}`, { withCredentials: true });
      fetchSearchHistories();
    }

    router.push({
      name: 'Katalog',
      query: query
    }).catch(err => {
      if (err.name !== 'NavigationDuplicated') throw err;
    });
  } catch (error) {
    alert("Gagal melakukan pencarian. Silakan coba lagi.");
    console.error("Error saat memicu pencarian/penyimpanan riwayat:", error);
  }
}


// LIFECYCLE HOOKS

watch(locale, (newLang) => {
  fetchCategories(newLang),
    fetchFaqs(newLang),
    fetchUnits(newLang),
    fetchBestSellers(newLang)
});

onMounted(async () => {
  window.addEventListener('resize', updateWindowWidth);
  updateWindowWidth();

  await Promise.all([
    fetchSearchHistories(),
    fetchCategories(locale.value),
    fetchFaqs(locale.value),
    fetchUnits(locale.value),
    fetchBestSellers(locale.value)
  ]);

  startAutoSlide();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
});
</script>

<style scoped>
@keyframes naikTurun {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.customer-satisfaction-badge {
  position: absolute;
  top: 200px;
  right: 170px;
  width: 150px;
  height: auto;
  z-index: 10;
  animation: naikTurun 2s ease-in-out infinite;
}

input {
  accent-color: #26A81D;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease-in-out, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
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