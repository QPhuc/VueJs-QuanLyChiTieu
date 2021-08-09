import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Transactions from '../views/Transactions.vue'
import TransactionsDetail from '../views/Transactions-detail.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/transactions',
    name: 'transaction-route',
    component: Transactions,
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/transactions/:id',
    name: 'transaction-details-route',
    component: TransactionsDetail,
  },
  {
    path: '/ts',
    redirect: '/transactions'
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
