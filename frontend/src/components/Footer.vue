<template>
  <div>
    <div class="w-full">
      <img src="/footer.png" alt="Footer Decoration" class="w-full h-[300px] object-cover" />
    </div>

    <footer id="footer" class="bg-green-50 text-white pt-12 relative">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left items-start">

        <!-- Kolom Logo -->
        <div class="flex flex-col items-center md:items-start order-1 md:order-1">
          <div class="flex items-center space-x-2 mb-4">
            <img src="/logo.svg" alt="Logo" class="w-10 h-10" />
            <h1 class="text-xl font-bold">
              <span class="text-green-500">REGAR</span>
              <span class="text-orange-500"> MART</span>
            </h1>
          </div>
          <p class="text-[#1C1C1E] text-sm leading-relaxed max-w-[320px]">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Kolom Newsletter (diganti dengan komponen baru) -->
        <div class="flex flex-col items-center md:items-start order-3 md:order-2">
          <h3 class="font-extrabold mb-4 text-[22px] text-[#1C1C1E]">{{ $t('footer.newsletter') }}</h3>
          <NewsletterForm />
        </div>

        <!-- Kolom Social Media -->
        <div class="flex flex-col items-center md:items-start order-2 md:order-3">
          <h3 class="font-extrabold mb-4 text-[22px] text-[#1C1C1E]">{{ $t('footer.social') }}</h3>
          <div class="flex space-x-6">
            <a href="#" class="inline-block"><img src="/facebook.svg" alt="Facebook"
                class="w-10 h-10 hover:scale-110 transition" /></a>
            <a href="#" class="inline-block"><img src="/linkedin.svg" alt="LinkedIn"
                class="w-10 h-10 hover:scale-110 transition" /></a>
            <a href="#" class="inline-block"><img src="/instagram.svg" alt="Instagram"
                class="w-10 h-10 hover:scale-110 transition" /></a>
            <a href="#" class="inline-block"><img src="/x.svg" alt="X"
                class="w-10 h-10 hover:scale-110 transition" /></a>
          </div>
        </div>

        <!-- Kolom Quick Links -->
        <div class="flex flex-col items-center md:items-start order-4 md:order-4">
          <h3 class="font-extrabold mb-4 text-[22px] text-[#1C1C1E]">{{ $t('footer.links') }}</h3>
          <ul class="flex flex-col md:flex-row items-center md:items-end gap-9 font-bold text-[#1C1C1E]">
            <li>
              <RouterLink to="/" class="hover:text-[#6EC568]">{{ $t('navbar.home') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/katalog" class="hover:text-[#6EC568]">{{ $t('navbar.catalog') }}</RouterLink>
            </li>
            <li>
              <RouterLink to="/tentang" class="hover:text-[#6EC568]">{{ $t('navbar.about') }}</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Home', hash: '#faq' }" class="hover:text-[#6EC568]">{{ $t('navbar.faq') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'Tentang', hash: '#contacts' }" class="hover:text-[#6EC568]">{{
                $t('navbar.contacts') }}</RouterLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-10 bg-gradient-to-r from-[#6EC568] to-[#26A81D] py-4 text-center text-white text-sm"
        v-html="$t('footer.rights', { year: copyrightYear })">
      </div>
    </footer>
  </div>
</template>

<script setup>
import NewsletterForm from './NewsletterForm.vue';

const copyrightYear = new Date().getFullYear();
</script>

<style scoped></style>
