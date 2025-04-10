import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/root',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RootFolder.vue'),
    },
    {
      path: '/root/:folder',
      component: () => import('../views/PersonalizedFolder.vue'),
    },
    {
      path: '/root/:folder/:subfolder',
      component: () => import('../views/ContentFolder.vue'),
    },
  ],
})

export default router
