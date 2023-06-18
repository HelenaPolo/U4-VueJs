import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/ApiViewCopy.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ApiViewCopy.vue')
    },
    {
      path: '/pokemon/:pokemonId',
      name: 'pokemon',
      props: true,
      component: () => import('../views/PhotoView.vue')
    }
  ]
})

export default router
