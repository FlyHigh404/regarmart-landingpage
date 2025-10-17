import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/katalog',
    name: 'Katalog',
    component: () => import('@/views/Katalog.vue'),
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: () => import('@/views/Tentang.vue'),
  },
  {
    path: '/testimoni',
    name: 'Testimoni',
    component: () => import('@/views/Testimoni.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
