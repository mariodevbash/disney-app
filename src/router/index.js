import { createRouter, createWebHashHistory } from 'vue-router'
import disneyRouter from '@/modules/disney/router'

const routes = [
  {
    path: '/disney',
    ...disneyRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
