import { createRouter, createWebHistory } from 'vue-router'
import  HomeScreen from '@/views/HomeScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeScreen,
      children: [
        {
          path: 'root',
          component: () => import('@/views/RootFolder.vue'),
          children: [
            {
              path: ':folderName',
              name: 'subfolder',
              components: {
                default: () => import('@/views/ContentFolder.vue'),
              },
            },
          ],
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    }
  ],
})

export default router
