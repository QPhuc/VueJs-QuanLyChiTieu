import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Transactions from '../pages/Transactions.vue'
import TransactionsDetail from '../pages/Transactions-detail.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/transactions/:id',
    component: TransactionsDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
