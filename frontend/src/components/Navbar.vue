<template>
  <div class="fixed top-0 w-full z-50">
    <nav class="max-w-[975px] mx-auto my-4 bg-white shadow-lg rounded-[40px] p-3 px-5 sm:px-8">

      <div class="flex items-center justify-between w-full">

        <div class="flex items-center space-x-8">

          <RouterLink to="/" class="flex items-center space-x-2">
            <img src="/logo.svg" alt="Regar Mart" class="h-8 w-8" />
            <h1 class="text-sm font-bold">
              <span class="text-green-600">REGAR</span>
              <span class="text-orange-500"> MART</span>
            </h1>
          </RouterLink>

          <ul class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <li>
              <RouterLink to="/" class="nav-link" active-class="active-link">Beranda</RouterLink>
            </li>
            <li>
              <RouterLink to="/katalog" class="nav-link" active-class="active-link">Katalog</RouterLink>
            </li>
            <li>
              <RouterLink to="/tentang" class="nav-link" active-class="active-link">Tentang Kami</RouterLink>
            </li>
            <li>
              <RouterLink to="/testimoni" class="nav-link" active-class="active-link">Testimoni</RouterLink>
            </li>
          </ul>
        </div>

        <div class="flex items-center">

          <div class="relative" ref="dropdownRef">

            <button @click="toggleDropdown"
              class="text-sm flex items-center px-4 sm:px-4 py-2 border border-green-600 text-black rounded-full font-semibold transition duration-150 hover:bg-green-50 flex-shrink-0"
              aria-expanded="true" aria-haspopup="true">
              <svg class="w-4 h-4 mr-1 sm:mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span class="hidden sm:inline">{{ selectedLanguage }}</span>
              <span class="sm:hidden">{{ selectedLanguage }}</span>
            </button>

            <div v-if="isOpen" class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl overflow-hidden z-20 
                        transition-all duration-200 origin-top-right">

              <a href="#" @click.prevent="selectLanguage('ENG')"
                class="block px-4 py-2 text-sm text-black hover:bg-green-50 hover:text-green-600 transition-colors"
                :class="{ 'font-bold': selectedLanguage === 'ENG' }">
                ENG
              </a>

              <a href="#" @click.prevent="selectLanguage('ID')"
                class="block px-4 py-2 text-sm text-black hover:bg-green-50 hover:text-green-600 transition-colors"
                :class="{ 'font-bold': selectedLanguage === 'ID' }">
                ID
              </a>
            </div>
          </div>

          <button @click="toggleMobileMenu" class="btn-toggle md:hidden ml-2 flex flex-col items-center justify-center 
                      bg-gradient-to-br from-[#6EC568] to-[#26A81D]
                      w-10 h-10 rounded-[8px] shadow-md 
                      transition-all duration-300 ease-in-out transform hover:scale-105" aria-label="Toggle navigation"
            :aria-expanded="isMobileMenuOpen.toString()">
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
            <span class="menu-bar"></span>
          </button>
        </div>
      </div>

    </nav>

    <div v-if="isMobileMenuOpen"
      class="md:hidden bg-white shadow-xl rounded-b-lg mx-auto max-w-sm sm:max-w-md mt-[-10px] pb-4 px-8 pt-4 z-40 relative">
      <ul class="flex flex-col space-y-3 text-sm font-medium text-gray-700 w-full text-center">
        <li>
          <RouterLink to="/" class="mobile-nav-link" active-class="mobile-active-link" @click="closeMobileMenu">Beranda
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/katalog" class="mobile-nav-link" active-class="mobile-active-link" @click="closeMobileMenu">
            Katalog</RouterLink>
        </li>
        <li>
          <RouterLink to="/tentang" class="mobile-nav-link" active-class="mobile-active-link" @click="closeMobileMenu">
            Tentang Kami</RouterLink>
        </li>
        <li>
          <RouterLink to="/testimoni" class="mobile-nav-link" active-class="mobile-active-link"
            @click="closeMobileMenu">Testimoni</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const selectedLanguage = ref('ID');
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  isMobileMenuOpen.value = false;
};

const selectLanguage = (lang) => {
  selectedLanguage.value = lang;
  isOpen.value = false;
};

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  isOpen.value = false;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};


const closeOnOutsideClick = (event) => {
  if (isOpen.value && dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }

  const navBarElement = document.querySelector('nav');
  const mobileMenuPanel = document.querySelector('.md\\:hidden.bg-white.shadow-xl');

  if (isMobileMenuOpen.value) {
    let isClickInsideNavOrPanel = false;
    if (navBarElement && navBarElement.contains(event.target)) {
      isClickInsideNavOrPanel = true;
    }
    if (mobileMenuPanel && mobileMenuPanel.contains(event.target)) {
      isClickInsideNavOrPanel = true;
    }

    if (!isClickInsideNavOrPanel) {
      isMobileMenuOpen.value = false;
    }
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
      rgba(255, 255, 255, 0.01));
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

.mobile-nav-link {
  display: inline-block;
  padding: 0.75rem 0;
  color: rgb(55 65 81);
  font-weight: 700;
  position: relative;
  transition: color 0.15s, transform 0.3s ease-out;
  border-radius: 0.5rem;
}

.md\:hidden ul li {
  text-align: center;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right,
      rgba(255, 255, 255, 0.01),
      rgb(110 197 104),
      rgb(22 163 74),
      rgb(110 197 104),
      rgba(255, 255, 255, 0.01));
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease-out;
}

.mobile-nav-link:hover,
.mobile-nav-link:focus {
  color: rgb(22 163 74);
  background-color: transparent;
  transform: translateY(-0.15rem);
}

.mobile-nav-link:hover::after,
.mobile-nav-link:focus::after {
  transform: scaleX(1);
}

.mobile-active-link {
  color: rgb(22 163 74);
  font-weight: 800;
  background-color: transparent;
  transform: translateY(-0.15rem);
}

.mobile-active-link::after {
  transform: scaleX(1);
}

.btn-toggle .menu-bar {
  width: 24px;
  height: 2px;
  border-radius: 20px;
  background: #fff;
  transition: all 0.3s ease;
  margin-block: 2.5px;
}

.btn-toggle:is([aria-expanded="true"]) .menu-bar:nth-child(2) {
  opacity: 0;
  transform: translateX(100%);
}

.btn-toggle:is([aria-expanded="true"]) .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.btn-toggle:is([aria-expanded="true"]) .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
</style>