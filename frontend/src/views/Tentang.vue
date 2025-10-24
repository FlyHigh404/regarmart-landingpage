<template>
  <div>
    <section class="relative w-screen py-16 overflow-hidden">
      <img src="/buahkiri.svg" alt="Decor Left" class="absolute top-0 left-0 h-full 
              w-[100px] sm:w-[180px] md:w-[300px] lg:w-[370px] 
              object-cover select-none pointer-events-none animate-float transition-all duration-300" />

      <img src="/buahkanan.svg" alt="Decor Right" class="absolute top-0 right-0 h-full 
              w-[100px] sm:w-[180px] md:w-[300px] lg:w-[370px] 
              object-cover select-none pointer-events-none animate-float transition-all duration-300" />


      <!-- Konten -->
      <div class="relative z-10 text-center max-w-2xl mx-auto px-23 sm:px-17 lg:px-9">
        <h1 class="text-2xl sm:text-3xl md:text-[30px] lg:text-[38px] font-extrabold leading-snug mb-4 text-center">
          <span class="block">
            <span class="text-[#26A81D]">{{ $t('aboutUs.title.term1') }}</span> {{ $t('aboutUs.title.term2') }}
          </span>
          <span class="block">
            {{ $t('aboutUs.title.term3') }} <span class="text-[#26A81D]">{{ $t('aboutUs.title.term4') }}</span>
          </span>
        </h1>
        <p class="text-gray-600 text-[15px] sm:text-base md:text-[18px] leading-relaxed"
          v-html="$t('aboutUs.subtitle')"></p>
      </div>

      <!-- Card Features -->
      <div class="relative z-10 mt-12 flex justify-center items-center gap-6 md:gap-10 lg:gap-11 max-w-6xl mx-auto 
            scale-[0.85] sm:scale-[0.9] md:scale-[0.95] lg:scale-[1] transition-transform duration-300">
        <div
          class="flex flex-col justify-center items-center text-center transition w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[230px]">
          <div class="flex justify-center items-center p-6 mb-4">
            <img src="/produk.svg" alt="Kesegaran Produk" class="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p class="text-green-600 font-medium text-[12px] sm:text-[16px] lg:text-[20px]">{{ $t('aboutUs.service1') }}
          </p>
        </div>

        <div
          class="flex flex-col justify-center items-center text-center transition w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[230px]">
          <div class="flex justify-center items-center p-6 mb-4">
            <img src="/belanja.svg" alt="Kepraktisan Belanja" class="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p class="text-green-600 font-medium text-[12px] sm:text-[16px] lg:text-[20px]">{{ $t('aboutUs.service2') }}
          </p>
        </div>

        <div
          class="flex flex-col justify-center items-center text-center transition w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[230px]">
          <div class="flex justify-center items-center p-6 mb-4">
            <img src="/harga.svg" alt="Harga Bersahabat" class="w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <p class="text-green-600 font-medium text-[12px] sm:text-[16px] lg:text-[20px]">{{ $t('aboutUs.service3') }}
          </p>
        </div>
      </div>
    </section>

    <!--Gambar Animasi-->
    <section class="relative w-screen py-12 bg-white mt-5 lg:mt-[80px]">
      <div class="flex gap-6 animate-slide">
        <img src="/gambaranimasi1.png" alt="Sayuran 1" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi2.png" alt="Sayuran 2" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi3.png" alt="Sayuran 3" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi4.png" alt="Sayuran 1" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi5.png" alt="Sayuran 2" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />
        <img src="/gambaranimasi1.png" alt="Sayuran 1" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi2.png" alt="Sayuran 2" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi3.png" alt="Sayuran 3" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi4.png" alt="Sayuran 1" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />

        <img src="/gambaranimasi5.png" alt="Sayuran 2" class="rounded-xl object-cover flex-shrink-0 
                  w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] md:w-[553px] md:h-[330px]" />
      </div>
    </section>

    <!-- Visi Misi -->
    <section class=" px-3 md:px-8 lg:px-[145px] mt-[80px]">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#1C1C1E]">
          {{ $t('aboutUs.visionTitle1') }} <span class="text-[#26A81D]">{{ $t('aboutUs.visionTitle2') }}</span>
        </h2>
      </div>

      <div class="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div data-aos="flip-left" data-aos-duration="1000"
          class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px]">
          <div class="w-full overflow-hidden rounded-t-[12px] rounded-[12px]">
            <div class="relative pt-[60%] bg-[#26A81D]">
              <img src="/toko.png" alt="Sustainability & Environmental Impact"
                class="absolute inset-0 w-full h-full object-cover">
            </div>
          </div>
          <div class="px-6 py-8 flex flex-col flex-grow">
            <h3 class="font-extrabold mb-4 text-[#26A81D] text-center">
              Awal Berdiri & Visi
            </h3>
            <p class="text-[14px] text-gray-700 text-center">
              Panganku Fresh hadir dengan visi menyediakan bahan pangan segar, sehat, dan terjangkau. Kami menggabungkan
              penjualan online & offline untuk memudahkan pelanggan.
            </p>
          </div>
        </div>

        <div data-aos="flip-up" data-aos-duration="1000"
          class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px] flex-1 h-full md:mt-0 lg:mt-6">
          <div class="w-full overflow-hidden rounded-t-[12px] rounded-[12px]">
            <div class="relative pt-[60%] bg-[#26A81D]">
              <img src="/komitmen.png" alt="Innovative & User Centric Technology"
                class="absolute inset-0 w-full h-full object-cover">
            </div>
          </div>
          <div class="px-6 py-8 flex flex-col flex-grow">
            <h3 class="font-extrabold mb-4 text-[#26A81D] text-center">
              Pelayanan & Komitmen
            </h3>
            <p class="text-[14px] text-gray-700 text-center">
              Kami bukan sekadar tempat belanja, tapi mitra keluarga & usaha kuliner. Dengan layanan ramah & cepat, kami
              berkomitmen menjaga kepuasan pelanggan melalui kualitas terbaik, transparansi harga, dan layanan siap
              bantu.
            </p>
          </div>
        </div>

        <div data-aos="flip-right" data-aos-duration="1000"
          class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px]">
          <div class="w-full overflow-hidden rounded-t-[12px] rounded-[12px]">
            <div class="relative pt-[60%] bg-[#26A81D]">
              <img src="/komitmen.png" alt="Innovative & User Centric Technology"
                class="absolute inset-0 w-full h-full object-cover">
            </div>
          </div>
          <div class="px-6 py-8 flex flex-col flex-grow">
            <h3 class="font-extrabold mb-4 text-[#26A81D] text-center">
              Pelayanan & Komitmen
            </h3>
            <p class="text-[14px] text-gray-700 text-center">
              Kami bukan sekadar tempat belanja, tapi mitra keluarga & usaha kuliner. Dengan layanan ramah & cepat, kami
              berkomitmen menjaga kepuasan pelanggan melalui kualitas terbaik, transparansi harga, dan layanan siap
              bantu.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--Temukan Kami-->
    <section class="mt-[150px] bg-white px-4 sm:px-8 lg:px-24">
      <h2 class="text-center text-2xl md:text-3xl font-bold mb-12">
        {{ $t('contacts.title') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">

        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
            <img src="/email.svg" alt="Email" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="font-bold text-[#26a81d] text-[16px] mt-3">{{ $t('contacts.email') }}</h3>
            <p class="text-[#A0A0A0] text-[16px] font-semibold">regarmart006@gmail.com</p>
          </div>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
            <img src="/location.svg" alt="Location" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-[#26a81d] text-[16px] mt-3">{{ $t('contacts.location') }}</h3>
          <p class="text-[#A0A0A0] text-[16px] font-semibold px-2">Jl. Medokan Sawah No.32 Surabaya</p>
        </div>

        <div class="flex flex-col items-center">
          <div
            class="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full shadow hover:shadow-lg transition">
            <img src="/whatsapp.svg" alt="WhatsApp" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-[#26a81d] text-[16px] mt-3">{{ $t('contacts.whatsapp') }}</h3>
          <p class="text-[#A0A0A0] text-[16px] font-semibold">+62 8567418101</p>
        </div>
      </div>

      <div class="w-full lg:px-[50px]">
        <iframe class="w-full h-96 rounded-xl shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2392017392497!2d112.79621507407388!3d-7.326621172050476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fba8d73e8d0d%3A0x7b3edcd3e2d78df5!2sJl.%20Medokan%20Sawah%20No.32%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1695912334567!5m2!1sen!2sid"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-slide {
  display: flex;
  width: max-content;
  animation: slide 35s linear infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

<script>
export default {
  name: "VisionMissionPage",
};
</script>
