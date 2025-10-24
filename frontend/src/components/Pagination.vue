<template>
  <div class="flex justify-center mt-10">
    <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
      <nav aria-label="Number Pagination">
        <ul class="flex items-center space-x-2">
          <li>
            <button
              class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-sm font-medium py-2.5 px-3 sm:px-5 rounded-lg shadow-md transition duration-150 ease-in-out"
              :class="[currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
              :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">
              {{ $t('pagination.prev') }}
            </button>
          </li>

          <li v-for="page in totalPages" :key="page" class="hidden sm:block">
            <button
              class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-sm font-medium transition duration-150 ease-in-out cursor-pointer"
              :class="[
                page === currentPage
                  ? 'bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white shadow-md'
                  : 'border-[1px] border-[#26A81D] text-[#4CAF50]'
              ]" @click="goToPage(page)">
              {{ page }}
            </button>
          </li>

          <li class="sm:hidden">
            <span
              class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-sm font-medium bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white shadow-md">
              {{ currentPage }}
            </span>
          </li>

          <li>
            <button
              class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-sm font-medium py-2.5 px-3 sm:px-5 rounded-lg shadow-md transition duration-150 ease-in-out"
              :class="[currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
              :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">
              {{ $t('pagination.next') }}
            </button>
          </li>
        </ul>
      </nav>

      <nav aria-label="Page Select" class="flex items-center space-x-2 text-sm text-gray-700">
        <span>{{ $t('pagination.page') }}</span>
        <div class="relative">
          <select :value="currentPage" @change="handlePageChange"
            class="appearance-none bg-white border-1 border-[#26A81D] text-[#4CAF50] font-semibold py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50] transition duration-150 ease-in-out cursor-pointer">
            <option v-for="page in totalPages" :key="page" :value="page">
              {{ page }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4CAF50]">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <span>{{ `${$t('pagination.of')} ${totalPages}` }}</span>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  goToPage: {
    type: Function,
    required: true
  }
});

const handlePageChange = (event) => {
  const newPage = Number(event.target.value);
  props.goToPage(newPage);
};
</script>

<style scoped></style>