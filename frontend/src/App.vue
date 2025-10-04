<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"; 
import WhatsAppButton from "./components/WhatsAppButton.vue"; 
</script>

<template>
  <div>
    <Navbar />
    
    <main class="pt-20 px-[145px] min-h-screen"> 
      <router-view />
    </main>

    <Footer /> 
  </div>
    <WhatsAppButton 
            phoneNumber="6281234567890" 
            initialMessage="Halo, saya ingin bertanya."
        />
</template>

<style scoped>
</style>