import { createRouter, createWebHashHistory } from 'vue-router'
import disneyRouter from '@/modules/disney/router'

const routes = [
  {
    path: '/disney',
    ...disneyRouter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found-view" */ '@/modules/ui/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
