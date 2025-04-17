import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      children: [
        {
          path: 'root',
          component: () => import('@/views/RootFolder.vue'),
          children: [
            {
              path: ':folderName',
              name: 'subfolder',
              components: { 
                default: () => import('@/views/ContentFolder.vue')},
            },
          ],
        },
      ]
    }
  ],
})

export default router
