<template>
    <div class="w-full">
      <img src="/footer.png" alt="Footer Decoration" class="w-full h-[300px] object-cover" />
    </div>
  <footer id="footer" class="bg-[#1C1C1E] text-white pt-12 relative">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
      
      <!-- Brand -->
      <div>
        <div class="flex items-center space-x-2 mb-4">
          <img src="/logo.svg" alt="Logo" class="w-10 h-10" />
          <h1 class="text-xl font-bold">
            <span class="text-green-500">REGAR</span>
            <span class="text-orange-500"> MART</span>
          </h1>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Gravida neque amet sed a ullamcorper.
        </p>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-semibold mb-4 text-lg">Newsletter</h3>
        <form class="flex">
          <input 
            type="email" 
            placeholder="Email" 
            aria-label="Masukkan Email"
            class="flex-grow px-4 py-3 text-white placeholder-white bg-[#2b472f] border border-[#6EC568] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <button 
            type="submit"
            class="bg-gradient-to-r from-[#6EC568] to-[#34d058] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-r-lg transition"
          >
            Send
          </button>
        </form>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="font-semibold mb-4 text-lg">Social Media</h3>
        <div class="flex space-x-4">
          <a href="#"><img src="/facebook.svg" alt="Facebook" class="w-10 h-10 hover:scale-110 transition" /></a>
          <a href="#"><img src="/linkedin.svg" alt="LinkedIn" class="w-10 h-10 hover:scale-110 transition" /></a>
          <a href="#"><img src="/instagram.svg" alt="Instagram" class="w-10 h-10 hover:scale-110 transition" /></a>
          <a href="#"><img src="/x.svg" alt="X" class="w-10 h-10 hover:scale-110 transition" /></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-semibold mb-4 text-lg">Quick Links</h3>
        <ul class="flex flex-wrap gap-6 text-white">
          <li><a href="#" class="hover:text-[#6EC568]">Beranda</a></li>
          <li><a href="#" class="hover:text-[#6EC568]">Katalog</a></li>
          <li><a href="#" class="hover:text-[#6EC568]">Tentang Kami</a></li>
          <li><a href="#" class="hover:text-[#6EC568]">FAQ</a></li>
          <li><a href="#" class="hover:text-[#6EC568]">Kontak</a></li>
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-10 bg-gradient-to-r from-[#6EC568] to-[#34d058] py-4 text-center text-white text-sm">
      Copyright@2025 All Right Reserved RegarMart
>>>>>>> 95d1d41eeea7646fd4fc23ef4d1fdebb133eb874
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
