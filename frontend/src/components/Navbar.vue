<template>
  <div class="fixed top-0 w-full z-50">
    
    <nav class="max-w-[975px] mx-auto my-4 bg-white shadow-lg rounded-[40px] p-3 px-5 sm:px-8">
      
      <div class="flex items-center justify-between w-full">
        
        <div class="flex items-center space-x-8">
          
          <div class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Regar Mart" class="h-8 w-8" />
          <h1 class="text-sm font-bold">
            <span class="text-green-600">REGAR</span>
            <span class="text-orange-500"> MART</span>
          </h1>
        </div>

          <ul class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <li>
            <RouterLink
              to="/"
              class="nav-link"
              active-class="active-link"
              >Beranda</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/katalog"
              class="nav-link"
              active-class="active-link"
              >Katalog</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/tentang"
              class="nav-link"
              active-class="active-link"
              >Tentang Kami</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/testimoni"
              class="nav-link"
              active-class="active-link"
              >Testimoni</RouterLink
            >
          </li>
        </ul>
        </div>
        
 <div class="relative" ref="dropdownRef">
    
    <button 
      @click="toggleDropdown" 
      class="text-sm flex items-center px-4 py-2 border border-green-600 text-black rounded-full font-semibold transition duration-150 hover:bg-green-50 flex-shrink-0"
    >
      <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
      {{ selectedLanguage }} 
    </button>

    <div 
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl overflow-hidden z-20 
             transition-all duration-200 origin-top-right"
    >
      
      <a 
        href="#" 
        @click.prevent="selectLanguage('ENG')"
        class="block px-4 py-2 text-sm text-black hover:bg-green-50 hover:text-green-600 transition-colors"
        :class="{ 'font-bold': selectedLanguage === 'ENG' }"
      >
        ENG
      </a>
      
      <a 
        href="#" 
        @click.prevent="selectLanguage('ID')"
        class="block px-4 py-2 text-sm text-black hover:bg-green-50 hover:text-green-600 transition-colors"
        :class="{ 'font-bold': selectedLanguage === 'ID' }"
      >
        ID
      </a>
    </div>
  </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const selectedLanguage = ref('ENG');
const dropdownRef = ref(null); 

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (lang) => {
  selectedLanguage.value = lang;
  isOpen.value = false;
};

const closeOnOutsideClick = (event) => {
  if (isOpen.value && dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeOnOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', closeOnOutsideClick);
});
</script>

<style scoped>
.nav-link {
  font-weight: 700;
  padding-bottom: 0.4rem; 
  color: rgb(55 65 81); 
  
  border-bottom: none; 
  transition: color 0.15s, transform 0.3s ease-out; 
  
  position: relative; 
  display: inline-block; 
}

.nav-link:hover {
  color: rgb(22 163 74); 
  transform: translateY(-0.15rem);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; 
  width: 100%; 
  
  background-image: linear-gradient(to right, 
    rgba(255, 255, 255, 0.01), 
    rgb(110 197 104),          
    rgb(22 163 74),            
    rgb(110 197 104),         
    rgba(255, 255, 255, 0.01) 
  );
  
  transform: scaleX(0);
  transform-origin: center; 
  transition: transform 0.3s ease-out; 
}

.nav-link:hover::after {
  transform: scaleX(1); 
}

.active-link {
  color: rgb(22 163 74); 
  transform: translateY(-0.15rem);
  font-weight: 800; 
}

.active-link::after {
  transform: scaleX(1);   
}

</style>