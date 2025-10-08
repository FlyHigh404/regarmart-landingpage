<template>
  <!-- HERO -->
  <section class="relative w-screen bg-white py-16 overflow-hidden">
    <!-- Dekor buah kiri & kanan -->
    <img src="/buahkiri.svg" alt="Decor Left" 
        class="absolute top-0 left-0 h-full w-[440px] object-cover select-none pointer-events-none" />
    <img src="/buahkanan.svg" alt="Decor Right" 
        class="absolute top-0 right-0 h-full w-[440px] object-cover select-none pointer-events-none" />

    <!-- Konten -->
    <div class="relative z-10 text-center max-w-3xl mx-auto px-4">
      <h1 class="text-2xl sm:text-3xl md:text-[38px] font-extrabold leading-snug mb-4 text-center">
        <span class="block">
          <span class="text-green-600">Belanja Harian</span> Jadi Lebih Mudah
        </span>
        <span class="block">
          Bersama <span class="text-green-600">Regar Mart</span>
        </span>
      </h1>
      <p class="text-gray-600 text-sm sm:text-base md:text-[18px] leading-relaxed">
        Kami hadir untuk memberikan pengalaman belanja kebutuhan pokok yang lebih
        <span class="font-semibold"> cepat, praktis, dan tetap segar.</span>
      </p>
    </div>

    <!-- Card Features -->
    <div class="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <!-- Card 1 -->
      <div class="bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center 
                  hover:shadow-lg transition w-[300px] h-[250px] mx-auto">
        <div class="flex justify-center items-center rounded-full bg-green-100 w-[120px] h-[120px] p-7 mb-4">
          <img src="/produk.svg" alt="Kesegaran Produk" class="w-16 h-16" />
        </div>
        <p class="text-green-600 font-medium text-lg">Kesegaran Produk</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center 
                  hover:shadow-lg transition w-[300px] h-[250px] mx-auto">
        <div class="flex justify-center items-center rounded-full bg-green-100 w-[120px] h-[120px] p-7 mb-4">
          <img src="/belanja.svg" alt="Kepraktisan Belanja" class="w-16 h-16" />
        </div>
        <p class="text-green-600 font-medium text-lg">Kepraktisan Belanja</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-white rounded-xl shadow-md flex flex-col justify-center items-center text-center 
                  hover:shadow-lg transition w-[300px] h-[250px] mx-auto">
        <div class="flex justify-center items-center rounded-full bg-green-100 w-[120px] h-[120px] p-7 mb-4">
          <img src="/harga.svg" alt="Harga Bersahabat" class="w-16 h-16" />
        </div>
        <p class="text-green-600 font-medium text-lg">Harga Bersahabat</p>
      </div>
    </div>
  </section>

  <section class="relative w-screen py-12 bg-white mt-[136px]">
    <div class="flex gap-6 animate-slide">

      <img src="/gambaranimasi.png" alt="Sayuran 1" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

      <img src="/gambaranimasi.png" alt="Sayuran 2" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

      <img src="/gambaranimasi.png" alt="Sayuran 3" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

      <img src="/gambaranimasi.png" alt="Sayuran 1" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

      <img src="/gambaranimasi.png" alt="Sayuran 2" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

      <img src="/gambaranimasi.png" alt="Sayuran 3" 
          class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />
    </div>
  </section>

  <section class="relative w-full flex justify-center items-center bg-white mt-[350px]">

    <div class="w-full h-[400px] relative">
      <img src="/bg-sayur.png" alt="background sayur"
          class="w-full h-[353px] object-cover rounded-md" />
    </div>

    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-[1123px] h-[311px] rounded-[12px] shadow-lg
                bg-[linear-gradient(94deg,#6EC568_0%,#26A81D_99.18%)]
                flex flex-col items-center justify-center text-center px-6 md:px-12 py-8">
      
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Sejarah Singkat</h2>
      <p class="text-sm md:text-base text-white leading-relaxed max-w-3xl">
        Panganku Fresh hadir oleh para pendiri memiliki visi sama untuk menyediakan sayur/sembako berkualitas
        dengan harga terjangkau. Kami memulai usaha ini dengan menggabungkan penjualan online dan offline untuk
        memberikan kemudahan bagi pelanggan. Dengan kerja keras dan dedikasi, Panganku Fresh terus berkembang dan
        mendapatkan kepercayaan dari pelanggan. Kami berkomitmen untuk selalu memberikan produk terbaik dan pelayanan
        ramah kepada masyarakat.
      </p>
    </div>  
  </section>
  
  <section class="bg-white py-16 mt-[148px]">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-6">

      <!-- About Us -->
      <div class="bg-[#1c1c1e] text-white p-8 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">About Us</h2>
        <p class="mb-4">
          Panganku Fresh hadir sebagai solusi belanja kebutuhan pangan yang segar, sehat, dan terjangkau. Kami percaya bahwa setiap keluarga berhak mendapatkan bahan pangan berkualitas tanpa harus khawatir akan harga maupun ketersediaannya.
        </p>
        <p class="mb-4">
          Berawal dari kebutuhan sehari-hari akan sembako, sayur-mayur, dan buah segar, kami berkomitmen untuk menghadirkan produk yang higienis dan terpercaya. Dengan menjalin kerja sama bersama petani lokal dan pemasok berpengalaman, Panganku Fresh memastikan setiap produk yang Anda terima selalu terjaga kesegarannya dari ladang hingga meja makan.
        </p>
        <p class="mb-4">
          Tidak hanya melalui toko offline, kami juga mengembangkan layanan online yang memudahkan Anda berbelanja dari rumah. Melalui website dan media sosial, Panganku Fresh siap melayani kebutuhan masyarakat luas, mulai dari ibu rumah tangga hingga restoran dan usaha kuliner.
        </p>
        <p>
          Bagi kami, Panganku Fresh bukan sekadar tempat belanja, melainkan mitra yang membantu menjaga kesehatan dan kenyamanan hidup Anda. Dengan pelayanan yang ramah, cepat, dan profesional, kami terus berinovasi agar menjadi pilihan utama dalam memenuhi kebutuhan pangan sehari-hari.
        </p>
      </div>

      <!-- Visi Misi -->
      <div class="bg-white p-8 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold text-green-600 mb-4">Visi</h2>
        <p class="mb-8">
          Menghubungkan Masyarakat Melalui Kebutuhan Pokok Yang Berkualitas Dan Terpercaya
        </p>

        <h2 class="text-2xl font-bold text-green-600 mb-4">Misi</h2>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="flex-shrink-0 bg-gradient-to-r from-[#6EC568] to-[#34d058] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-3">1</span>
            Membangun kepercayaan: Menyediakan produk sembako dan sayur-mayur yang segar, higienis, dan berkualitas setiap hari.
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 bg-gradient-to-r from-[#6EC568] to-[#34d058] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-3">2</span>
            Menghubungkan komunitas: Menjalin kerja sama dengan petani lokal dan pemasok terpercaya untuk menjaga ketersediaan dan kualitas produk.
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 bg-gradient-to-r from-[#6EC568] to-[#34d058] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-3">3</span>
            Memberikan pelayanan yang ramah, cepat, dan profesional kepada setiap pelanggan.
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 bg-gradient-to-r from-[#6EC568] to-[#34d058] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-3">4</span>
            Menjaga harga tetap terjangkau tanpa mengorbankan kualitas.
          </li>
          <li class="flex items-start">
            <span class="flex-shrink-0 bg-gradient-to-r from-[#6EC568] to-[#34d058] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-3">5</span>
            Menjaga harga tetap terjangkau tanpa mengorbankan kualitas.
          </li>
        </ul>
      </div>
  </div>
</section>

  <section class="py-16 bg-white px-[145px]">
    <h2 class="text-center text-2xl md:text-3xl font-bold mb-12">
      Find Us Here
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center px-6">
    
      <div class="flex flex-col items-center">
        <div class="w-20 h-20 flex flex-col items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
          <img src="/email.svg" alt="Email" class="w-12 h-12 mb-2" />
        </div>
        <div>
          <h3 class="font-semibold text-green-600 mt-3">Email Address</h3>
          <p class="text-gray-600">regarmart006@gmail.com</p>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-20 h-20 flex flex-col items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
          <img src="/whatsapp.svg" alt="WhatsApp" class="w-12 h-12 mb-2" />
        </div>
        <h3 class="font-semibold text-green-600 mt-3">WhatsApp</h3>
        <p class=" text-gray-600">+62 8567418101</p>
      </div>

      <div class="flex flex-col items-center">
        <div class="w-20 h-20 flex flex-col items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
          <img src="/location.svg" alt="Location" class="w-12 h-12 mb-2" />
        </div>
        <h3 class="font-semibold text-green-600 mt-3">Office Location</h3>
        <p class=" text-gray-600">Jl. Medokan Sawah No.32 Surabaya</p>
      </div>
    </div>

    <div class="px-12 lg:px-[145px]">
      <iframe
        class="w-full h-96 rounded-xl shadow"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2392017392497!2d112.79621507407388!3d-7.326621172050476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fba8d73e8d0d%3A0x7b3edcd3e2d78df5!2sJl.%20Medokan%20Sawah%20No.32%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1695912334567!5m2!1sen!2sid"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<style>
@keyframes slide {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-slide {
  display: flex;
  width: max-content;
  animation: slide 25s linear infinite;
}
</style>

<script>
export default {
  name: "VisionMissionPage",
};
</script>

