import { createRouter, createWebHashHistory } from 'vue-router'
import disneyRouter from '@/modules/disney/router'

const routes = [
  {
    path: '',
    redirect: {name: 'general-view'}
  },
  {
    path: '/disney',
    ...disneyRouter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found-view" */ '@/modules/common/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
