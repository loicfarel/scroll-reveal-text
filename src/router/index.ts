import { createRouter, createWebHistory } from 'vue-router'
import ScrollPining from '@/views/ScrollPining.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scroll.pining',
      component: ScrollPining
    }
  ]
})

export default router
