import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Transactions from '../pages/Transactions.vue'
import TransactionsDetail from '../pages/Transactions-detail.vue'
import NotFound from '../pages/404.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/transactions',
    name: 'transaction-route',
    component: Transactions,
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
