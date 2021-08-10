import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/404.vue'
import { projectAuth } from "@/configs/firebase"

// Auth Guards
const requireAuth = (to, from , next) => {
  const user = projectAuth.currentUser;

  if(!user) next({ name: "Login", params: {} })
  else next();
};

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      text: "Hey, Phuc Tran",
      leading: true,
    },
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
    path: '/profile',
    name: 'Profile',
    meta: {
      text: "Profile",
      leading: false,
    },
    component: () => import (/* webpackChunkName: "profile" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import (/* webpackChunkName: "logout" */ "../views/logout.vue"),
  },
  {
    path: '/budget',
    name: 'Budget',
    meta: {
      text: "Budget",
      leading: false,
    },
    component: () => import (/* webpackChunkName: "budget" */ "../views/budget.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: '/report',
    name: 'Report',
    meta: {
      text: "Report",
      leading: false,
    },
    component: () => import (/* webpackChunkName: "report" */ "../views/report.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: '/new-transaction',
    name: 'NewTransaction',
    component: () => import (/* webpackChunkName: "transaction" */ "../views/new-transaction.vue"),
    beforeEnter: requireAuth,
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
