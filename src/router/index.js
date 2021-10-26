import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '@/views/user/Users.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/users', name: 'Users', component: Users }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
