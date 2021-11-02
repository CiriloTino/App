import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '@/views/user/Users.vue'
import Create_user from '@/views/user/Create_user.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/users', name: 'Users', component: Users },
  { path: '/create_user', name: 'Create_user', component: Create_user}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
