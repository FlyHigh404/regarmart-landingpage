import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Katalog from "../views/Katalog.vue";
import Tentang from "../views/Tentang.vue";
import Testimoni from "../views/Testimoni.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/katalog", name: "Katalog", component: Katalog },
  { path: "/tentang", name: "Tentang", component: Tentang },
  { path: "/testimoni", name: "Testimoni", component: Testimoni },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
