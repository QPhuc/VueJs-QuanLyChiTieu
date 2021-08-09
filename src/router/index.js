import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import (/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
