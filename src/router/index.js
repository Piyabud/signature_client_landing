// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});





export default router;
