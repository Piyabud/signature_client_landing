import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('@/views/Policy.vue')
  },
  {
    path: '/term',
    name: 'Term',
    component: () => import('@/views/TermPages.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactPages.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});





export default router;
