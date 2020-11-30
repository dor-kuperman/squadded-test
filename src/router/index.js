import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from '../views/main-page.vue'
import userPage from '../views/user-page.vue'

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: mainPage
  },
  {
    path: '/user/:id',
    name: 'user-page',
    component: userPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
