import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import AuthView from '@/views/AuthView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import FeedView from '@/views/FeedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
        {
          // temporary route, to change when doing login feature
          path: '/login',
          name: 'login',
          component: LoginView
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
