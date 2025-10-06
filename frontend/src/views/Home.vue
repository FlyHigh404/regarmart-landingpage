<template>
  <div class="px-[145px]">
    <div class="whatsapp-background-blob-top-right"></div>
    <div class="whatsapp-background-blob-bottom-left"></div> 
    <section id="hero" class="pt-10">
      <div class="container mx-auto">
        <h1 class="text-[38px] font-extrabold mb-4 text-center">
          <span class="text-[#1B1F1B]">Semua Kebutuhan Harian,</span>
          <span class="text-[#26A81D]"> Tinggal Klik!</span><br />
          <span class="text-[#26A81D]">Kebutuhan Terpenuhi</span>
          <span class="text-[#1B1F1B]">, Hati Pun Tenang</span>
        </h1>
        <p class="text-[#6D706E] text-center text-[18px] mx-auto">
          Belanja semakin gampang, cukup pesan <span class="font-bold">lewat WhatsApp.</span><br />
          <span class="font-bold">Regar Mart</span> siapin dengan <span class="font-bold">packing rapi</span> dan kirim langsung ke rumahmu.
        </p>
        <div class="container mx-auto mt-7">
    
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      <div class="lg:col-span-2 space-y-4">

        <div class=" bg-white rounded-xl shadow-md border border-gray-100">
          <div class="flex items-center justify-between">
            <div class="relative flex-grow mr-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Cari produk terbaik di RegarMart..."
                class="w-full pl-10 pr-2 py-4 border-none rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 transition-colors"
                style="padding-left: 2.5rem;" 
              />
            </div>
            <div class="pr-2">
            <button class="bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white text-xs p-2 px-3 rounded-[7px] transition-colors shadow-md">
              Cari Produk
            </button>
            </div>
          </div>
        </div>
        
        <div class="p-5 pl-7 bg-white rounded-xl shadow-md border border-gray-100">
          <h2 class="text-sm font-bold mb-2 text-[#1B1F1B]">Filter Pencarian</h2>

          <div class="mb-2 border-b border-gray-200">
            <label class="block text-gray-700 text-xs mb-2">Kategori</label>
            <select class="text-sm w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none bg-white font-semibold">
              <option>Pilih Kategori</option>
              <option>Riska</option>
              <option>Dita</option>
              <option>Yazid</option>
              <option>Hafidz</option>
              <option></option>
            </select>
          </div>

          <div>
            <label class=" text-gray-700 text-xs">Satuan Produk</label>
              <div class="text-sm flex flex-wrap gap-4 text-black"> 
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="satuan" class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">Pcs, Butir, Buah</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="satuan" class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">Bundling (Berat, Ikat)</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="satuan" class="text-green-600 focus:ring-green-500" />
                  <span class="font-semibold">Karton, Box</span>
                </label>
              </div>
          </div>
        </div>
        
        <div class="p-5 pl-7 bg-white rounded-xl shadow-md border border-gray-100">
            <h3 class="text-sm font-bold mb-3">Pencarian Terakhir</h3>
            <ul class="text-sm text-semibold space-y-4">
                <li class="flex justify-between items-center text-gray-700 cursor-pointer transition-colors">
                    Cabai merah keriting
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </li>
                <li class="flex justify-between items-center text-gray-700 cursor-pointer transition-colors">
                    Telur ayam kampung omega
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </li>
            </ul>
        </div>

      </div>

      <div class="lg:col-span-2 flex flex-col h-full">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-[#1B1F1B]">Produk Terlaris</h2>
          <div class="flex space-x-1">
            <button class="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-[6px] text-black hover:bg-gray-100 transition-colors">
              &lt;
            </button>
            <button class="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-[6px] text-black hover:bg-gray-100 transition-colors">
              &gt;
            </button>
          </div>
        </div>

        <div class="flex space-x-6 h-full">
          
          <div class="w-1/2 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col flex-grow">
            <div class="flex justify-center items-center h-30 bg-gray-50 rounded-lg">
                <img src="/susu.png" alt="Susu UHT" class="rounded-tr-xl rounded-tl-xl h-full w-full object-cover" />
            </div>

            <div class="p-4">
              <h3 class="text-sm font-bold mb-2">Susu UHT Full Cream 1 Liter</h3>
              <p class="text-green-600 font-semibold text-[12px] mb-1">Stok Tersedia</p>
              <p class="text-gray-600 text-[10px] mb-2 flex-grow">Susu UHT berkualitas dengan rasa creamy lezat, kaya nutrisi, dan praktis.</p>
              <p class="text-[16px] font-bold mb-3">Rp22,500</p>

              <div class="space-y-3 mt-auto">
                <a href="https://wa.me/6281234567890" target="_blank" class="flex gap-1.5 items-center justify-center bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white py-1.5 rounded-[10px] text-center transition-colors text-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 20 21" fill="none">
                    <path d="M14.6548 11.8156L12.1548 10.5656C12.0563 10.5166 11.9467 10.4944 11.837 10.5012C11.7273 10.5081 11.6213 10.5438 11.5298 10.6047L10.3821 11.3703C9.85526 11.0807 9.42171 10.6471 9.13209 10.1203L9.89772 8.97266C9.95863 8.88112 9.99432 8.77514 10.0012 8.6654C10.008 8.55567 9.98582 8.44606 9.93678 8.34766L8.68678 5.84766C8.63497 5.74302 8.55489 5.655 8.45561 5.59355C8.35633 5.5321 8.24182 5.4997 8.12506 5.5C7.29626 5.5 6.50141 5.82924 5.91536 6.41529C5.3293 7.00134 5.00006 7.7962 5.00006 8.625C5.00213 10.4477 5.72712 12.1952 7.01599 13.4841C8.30485 14.7729 10.0523 15.4979 11.8751 15.5C12.2854 15.5 12.6918 15.4192 13.0709 15.2621C13.4501 15.1051 13.7946 14.8749 14.0848 14.5847C14.375 14.2945 14.6051 13.95 14.7622 13.5709C14.9192 13.1917 15.0001 12.7854 15.0001 12.375C15.0001 12.2589 14.9679 12.145 14.9069 12.0462C14.8459 11.9474 14.7586 11.8676 14.6548 11.8156ZM11.8751 14.25C10.3837 14.2483 8.95395 13.6552 7.89942 12.6006C6.84488 11.5461 6.25172 10.1163 6.25006 8.625C6.24994 8.1915 6.40004 7.77135 6.6748 7.43605C6.94956 7.10075 7.33202 6.87101 7.75709 6.78594L8.65397 8.58281L7.89069 9.71875C7.83365 9.80431 7.7986 9.90262 7.78866 10.005C7.77871 10.1073 7.79417 10.2105 7.83366 10.3055C8.28083 11.3683 9.12633 12.2138 10.1891 12.6609C10.2844 12.7022 10.3884 12.7191 10.4917 12.7101C10.5951 12.7011 10.6946 12.6665 10.7813 12.6094L11.9227 11.8484L13.7196 12.7453C13.6339 13.1709 13.4031 13.5535 13.0667 13.8279C12.7304 14.1023 12.3092 14.2515 11.8751 14.25ZM10.0001 2.375C8.5973 2.37469 7.21836 2.73757 5.99745 3.4283C4.77654 4.11904 3.75526 5.1141 3.03301 6.31664C2.31077 7.51918 1.91216 8.88822 1.87599 10.2905C1.83983 11.6928 2.16733 13.0806 2.82663 14.3188L1.93991 16.9789C1.86646 17.1992 1.8558 17.4355 1.90913 17.6615C1.96245 17.8874 2.07765 18.0941 2.24182 18.2582C2.40599 18.4224 2.61264 18.5376 2.8386 18.5909C3.06456 18.6443 3.30091 18.6336 3.52116 18.5602L6.18131 17.6734C7.27098 18.253 8.47836 18.5767 9.7118 18.62C10.9453 18.6633 12.1724 18.425 13.3 17.9232C14.4276 17.4215 15.426 16.6694 16.2196 15.7241C17.0132 14.7789 17.5809 13.6652 17.8798 12.4678C18.1788 11.2703 18.2009 10.0205 17.9447 8.81315C17.6885 7.60584 17.1605 6.47276 16.401 5.49993C15.6415 4.52711 14.6703 3.74009 13.5612 3.19864C12.4521 2.65718 11.2343 2.37551 10.0001 2.375ZM10.0001 17.375C8.79145 17.3758 7.60405 17.0575 6.55788 16.4523C6.48128 16.4079 6.39612 16.3803 6.30803 16.3713C6.21995 16.3622 6.13095 16.372 6.04694 16.4L3.12506 17.375L4.09928 14.4531C4.12737 14.3692 4.13729 14.2802 4.1284 14.1921C4.11951 14.104 4.09201 14.0188 4.04772 13.9422C3.28989 12.632 2.98562 11.1083 3.18212 9.60747C3.37862 8.10667 4.0649 6.71267 5.13451 5.64171C6.20411 4.57076 7.59725 3.88271 9.09779 3.68431C10.5983 3.48592 12.1224 3.78826 13.4336 4.54444C14.7448 5.30062 15.7698 6.46837 16.3496 7.86652C16.9293 9.26468 17.0315 10.8151 16.6402 12.2773C16.249 13.7394 15.3861 15.0316 14.1855 15.9533C12.9849 16.875 11.5137 17.3748 10.0001 17.375Z" fill="#FAFAFA"/>
                  </svg>
                  Pesan via WhatsApp
                </a>
                <button class="w-full bg-gray-100 hover:bg-gray-200 text-black py-1.5 rounded-[10px] transition-colors text-[12px]">
                  Quick View
                </button>
              </div>
            </div>
          </div>
          
          <div class="w-1/2 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col flex-grow">
            <div class="flex justify-center items-center h-30 bg-gray-50 rounded-lg">
                <img src="/susu.png" alt="Susu UHT" class="rounded-tr-xl rounded-tl-xl h-full w-full object-cover" />
            </div>

            <div class="p-4">
              <h3 class="text-sm font-bold mb-2">Susu UHT Full Cream 1 Liter</h3>
              <p class="text-green-600 font-semibold text-[12px] mb-1">Stok Tersedia</p>
              <p class="text-gray-600 text-[10px] mb-2 flex-grow">Susu UHT berkualitas dengan rasa creamy lezat, kaya nutrisi, dan praktis.</p>
              <p class="text-[16px] font-bold mb-3">Rp22,500</p>

              <div class="space-y-3 mt-auto">
                <a href="https://wa.me/6281234567890" target="_blank" class="flex gap-1.5 items-center justify-center bg-gradient-to-br from-[#6EC568] to-[#26A81D] text-white py-1.5 rounded-[10px] text-center transition-colors text-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 20 21" fill="none">
                    <path d="M14.6548 11.8156L12.1548 10.5656C12.0563 10.5166 11.9467 10.4944 11.837 10.5012C11.7273 10.5081 11.6213 10.5438 11.5298 10.6047L10.3821 11.3703C9.85526 11.0807 9.42171 10.6471 9.13209 10.1203L9.89772 8.97266C9.95863 8.88112 9.99432 8.77514 10.0012 8.6654C10.008 8.55567 9.98582 8.44606 9.93678 8.34766L8.68678 5.84766C8.63497 5.74302 8.55489 5.655 8.45561 5.59355C8.35633 5.5321 8.24182 5.4997 8.12506 5.5C7.29626 5.5 6.50141 5.82924 5.91536 6.41529C5.3293 7.00134 5.00006 7.7962 5.00006 8.625C5.00213 10.4477 5.72712 12.1952 7.01599 13.4841C8.30485 14.7729 10.0523 15.4979 11.8751 15.5C12.2854 15.5 12.6918 15.4192 13.0709 15.2621C13.4501 15.1051 13.7946 14.8749 14.0848 14.5847C14.375 14.2945 14.6051 13.95 14.7622 13.5709C14.9192 13.1917 15.0001 12.7854 15.0001 12.375C15.0001 12.2589 14.9679 12.145 14.9069 12.0462C14.8459 11.9474 14.7586 11.8676 14.6548 11.8156ZM11.8751 14.25C10.3837 14.2483 8.95395 13.6552 7.89942 12.6006C6.84488 11.5461 6.25172 10.1163 6.25006 8.625C6.24994 8.1915 6.40004 7.77135 6.6748 7.43605C6.94956 7.10075 7.33202 6.87101 7.75709 6.78594L8.65397 8.58281L7.89069 9.71875C7.83365 9.80431 7.7986 9.90262 7.78866 10.005C7.77871 10.1073 7.79417 10.2105 7.83366 10.3055C8.28083 11.3683 9.12633 12.2138 10.1891 12.6609C10.2844 12.7022 10.3884 12.7191 10.4917 12.7101C10.5951 12.7011 10.6946 12.6665 10.7813 12.6094L11.9227 11.8484L13.7196 12.7453C13.6339 13.1709 13.4031 13.5535 13.0667 13.8279C12.7304 14.1023 12.3092 14.2515 11.8751 14.25ZM10.0001 2.375C8.5973 2.37469 7.21836 2.73757 5.99745 3.4283C4.77654 4.11904 3.75526 5.1141 3.03301 6.31664C2.31077 7.51918 1.91216 8.88822 1.87599 10.2905C1.83983 11.6928 2.16733 13.0806 2.82663 14.3188L1.93991 16.9789C1.86646 17.1992 1.8558 17.4355 1.90913 17.6615C1.96245 17.8874 2.07765 18.0941 2.24182 18.2582C2.40599 18.4224 2.61264 18.5376 2.8386 18.5909C3.06456 18.6443 3.30091 18.6336 3.52116 18.5602L6.18131 17.6734C7.27098 18.253 8.47836 18.5767 9.7118 18.62C10.9453 18.6633 12.1724 18.425 13.3 17.9232C14.4276 17.4215 15.426 16.6694 16.2196 15.7241C17.0132 14.7789 17.5809 13.6652 17.8798 12.4678C18.1788 11.2703 18.2009 10.0205 17.9447 8.81315C17.6885 7.60584 17.1605 6.47276 16.401 5.49993C15.6415 4.52711 14.6703 3.74009 13.5612 3.19864C12.4521 2.65718 11.2343 2.37551 10.0001 2.375ZM10.0001 17.375C8.79145 17.3758 7.60405 17.0575 6.55788 16.4523C6.48128 16.4079 6.39612 16.3803 6.30803 16.3713C6.21995 16.3622 6.13095 16.372 6.04694 16.4L3.12506 17.375L4.09928 14.4531C4.12737 14.3692 4.13729 14.2802 4.1284 14.1921C4.11951 14.104 4.09201 14.0188 4.04772 13.9422C3.28989 12.632 2.98562 11.1083 3.18212 9.60747C3.37862 8.10667 4.0649 6.71267 5.13451 5.64171C6.20411 4.57076 7.59725 3.88271 9.09779 3.68431C10.5983 3.48592 12.1224 3.78826 13.4336 4.54444C14.7448 5.30062 15.7698 6.46837 16.3496 7.86652C16.9293 9.26468 17.0315 10.8151 16.6402 12.2773C16.249 13.7394 15.3861 15.0316 14.1855 15.9533C12.9849 16.875 11.5137 17.3748 10.0001 17.375Z" fill="#FAFAFA"/>
                  </svg>
                  Pesan via WhatsApp
                </a>
                <button class="w-full bg-gray-100 hover:bg-gray-200 text-black py-1.5 rounded-[10px] transition-colors text-[12px]">
                  Quick View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </section>

    <section id="keunggulan" class="pt-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">
          <span class="text-[#1B1F1B]">Keunggulan Berbelanja di</span>
          <span class="text-[#26A81D]"> Regar Mart</span>
        </h2>
        <p class="text-[#6D706E] text-[18px] mx-auto mb-8">
          Regar Mart hadir untuk memberikan <span class="font-bold">pengalaman belanja yang lebih baik. </span>Kami menawarkan <br />
          <span class="font-bold">keunggulan </span>yang membuat setiap transaksi <span class="font-bold">lebih mudah, hemat, dan terpercaya.</span>
        </p>
        <div class="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-2-center">

          <div
            class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px] transition duration-400 ease-in-out hover:shadow-2xl hover:-translate-y-2">
            <div class=" w-[full] overflow-hidden">
              <img src="/keunggulan.png" alt="Sustainability & Environmental Impact"
                class="h-full w-full object-cover">
            </div>
            <div class="px-9 py-8 flex flex-col flex-grow">
              <h3 class="font-extrabold mb-4 text-[#26A81D] text-left">
                Harga Terjangkau & Transparan              
              </h3>
              <p class="text-[14px] text-gray-700 text-left">
                Belanja lebih hemat dengan harga yang jujur. Regar Mart selalu menawarkan pilihan terbaik agar kebutuhan Anda terpenuhi tanpa menguras kantong.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg overflow-hidden flex flex-col rounded-[12px] transition duration-400 ease-in-out hover:shadow-2xl hover:-translate-y-2">
            <div class=" w-full overflow-hidden">
              <img src="/keunggulan.png" alt="Innovative & User Centric Technology"
                class="h-full w-full object-cover">
            </div>
            <div class="px-9 py-8 flex flex-col flex-grow">
              <h3 class="font-extrabold mb-4 text-[#26A81D] text-left">
                Produk Lengkap & Berkualitas
              </h3>
              <p class="text-[14px] text-gray-700 text-left">
                Semua kebutuhan harian tersedia dengan kualitas terbaik. Produk dipilih secara teliti agar pengalaman belanja Anda selalu nyaman, aman, dan memuaskan.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg overflow-hidden flex flex-col  rounded-[12px] transition duration-400 ease-in-out hover:shadow-2xl hover:-translate-y-2">
            <div class="w-full overflow-hidden">
              <img src="/keunggulan.png" alt="Market Potential & Growth Opportunity"
                class="h-full w-full object-cover">
            </div>
            <div class="px-9 py-8 flex flex-col flex-grow">
              <h3 class="font-extrabold mb-4 text-[#26A81D] text-left">
                 Layanan Cepat & Terpercaya
              </h3>
              <p class="text-[14px] text-gray-700 text-left">
                Nikmati pengalaman belanja praktis dengan layanan sigap. Pengiriman cepat dan sistem terpercaya menjadikan Regar Mart selalu ada saat Anda butuh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="pt-20">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-5 text-gray-800">
        <span class="text-[#26A81D]">Frequently </span>Ask Question
      </h2>
      
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqData" 
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        >
          <div 
            @click="toggleFaq(index)"
            class="p-3 flex justify-between items-center cursor-pointer select-none"
          >
            <h3 class="pl-2 text-[16px] font-semibold text-gray-700">
              {{ item.question }}
            </h3>
            
            <div 
              class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform duration-300"
              :class="{'rotate-180 bg-gradient-to-br from-[#BCE4B9] to-[#26A81D] text-white': activeIndex === index, 'bg-gray-100 text-[#26A81D]': activeIndex !== index}"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 sm:h-6 sm:w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="2"
                :class="{'text-white': activeIndex === index, 'text-[#26A81D]': activeIndex !== index}"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <transition 
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          >
            <div v-show="activeIndex === index" class="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
              <p class="text-[#26A81D] border-t border-gray-200 pt-4 text-[16px]">
                {{ item.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'F',
  data() {
    return {
      activeIndex: -1, 
      faqData: [
        {
          question: "Apa jenis produk yang dijual?",
          answer: "Kami menjual berbagai jenis sayuran segar dan sembako berkualitas untuk memenuhi kebutuhan pokok sehari-hari."
        },
        {
          question: "Apakah ada layanan pengiriman?",
          answer: "Ya, kami menyediakan layanan pengiriman untuk area [wilayah/lokasi] dengan biaya yang kompetitif."
        },
        {
          question: "Bagaimana cara melakukan pemesanan?",
          answer: "Anda bisa melakukan pemesanan melalui website kami, atau langsung datang ke toko kami."
        },
        {
          question: "Apakah produk yang dijual berkualitas?",
          answer: "Ya, kami hanya menjual produk segar dan berkualitas dari supplier terpercaya."
        },
        {
          question: "Bagaimana jika produk yang diterima rusak atau tidak sesuai?",
          answer: "Kami menerima pengembalian atau penggantian produk jika ada kerusakan atau ketidaksesuaian. Silakan hubungi kami dalam waktu [batas waktu] untuk proses lebih lanjut."
        },
        {
          question: "Apakah ada promo atau diskon?",
          answer: "Ya, kami sering mengadakan promo dan diskon untuk produk tertentu. Pantau terus media sosial kami untuk informasi terbaru."
        }
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
      } else {
        this.activeIndex = index;
      }
    },
    
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = '0';
    }
  }
}
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: height 0.3s ease-in-out, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter, .accordion-leave-to {
  opacity: 0;
}
</style>