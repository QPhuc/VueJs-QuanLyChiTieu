import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import (/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth'
    },
    component: () => import (/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: () => import (/* webpackChunkName: "login" */ "../views/login.vue"),
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
