import { createRouter, createWebHistory } from "vue-router";
import Katalog from "../views/Katalog.vue";
import Tentang from "../views/Tentang.vue";

const routes = [
  { path: "/katalog", name: "Katalog", component: Katalog },
  { path: "/tentang", name: "Tentang", component: Tentang },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
