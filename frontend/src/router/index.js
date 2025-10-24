import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Beranda Regar Mart Jual Kebutuhan Harian Online Terbaik, Cepat, dan Murah",
      description: "Belanja kebutuhan harian dan dapur jadi gampang, tinggal klik pesan lewat WhatsApp. Regar Mart siap kirim langsung ke rumah Anda di Surabaya dan sekitarnya. Cek Katalog sekarang!",
      keywords: "regar mart, toko online, kebutuhan harian, sembako online, beli sayur online, surabaya",
    },
  },
  {
    path: "/katalog",
    name: "Katalog",
    component: () => import("@/views/Katalog.vue"),
    meta: {
      title: "Katalog Produk Regar Mart Buah, Sayur, Sembako Segar Terbaru",
      description: "Lihat daftar lengkap produk Regar Mart. Kami menyediakan berbagai produk segar seperti buah, sayur, telur, dan kebutuhan dapur lainnya dengan harga terbaik.",
      keywords: "katalog regar mart, produk segar, buah segar, sayur segar, sembako online",
    },
  },
  {
    path: "/tentang",
    name: "Tentang",
    component: () => import("@/views/Tentang.vue"),
    meta: {
      title: "Tentang Regar Mart Toko Online Kebutuhan Harian Terpercaya",
      description: "Kenali lebih dekat Regar Mart, platform belanja online kebutuhan harian yang mengutamakan kualitas, kecepatan, dan pelayanan terbaik untuk kepuasan pelanggan.",
      keywords: "tentang regar mart, toko online terpercaya, kebutuhan harian, layanan cepat, profil perusahaan",
    },
  },
  {
    path: "/testimoni",
    name: "Testimoni",
    component: () => import("@/views/Testimoni.vue"),
    meta: {
      title: "Testimoni Pelanggan Regar Mart Pengalaman Belanja Online Terbaik",
      description: "Simak ulasan dan testimoni nyata dari pelanggan setia Regar Mart tentang kualitas produk dan layanan pengiriman kami.",
      keywords: "testimoni regar mart, ulasan pelanggan, pengalaman belanja online, kepuasan pelanggan",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });

    return { top: 0, left: 0 };
  },
});

const defaultTitle = 'Regar Mart - Kebutuhan Harian Anda';
const defaultDescription = 'Pesan kebutuhan harian lewat WhatsApp. Cepat, Murah, dan Segar.';

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || defaultTitle;

  const descriptionTag = document.querySelector('meta[name="description"]');
  const newDescription = to.meta.description || defaultDescription;

  if (descriptionTag) {
    descriptionTag.setAttribute('content', newDescription);
  } else {
    const newTag = document.createElement('meta');
    newTag.setAttribute('name', 'description');
    newTag.setAttribute('content', newDescription);
    document.head.appendChild(newTag);
  }

  const keywordsTag = document.querySelector('meta[name="keywords"]');
  const newKeywords = to.meta.keywords || 'kebutuhan harian, toko online, regar mart';

  if (keywordsTag) {
    keywordsTag.setAttribute('content', newKeywords);
  }
  
  next();
});

export default router;
