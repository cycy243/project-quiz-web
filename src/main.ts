import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import type AuthService from './modules/services/authService'

import * as injectionKeys from '@/modules/utils/injectionKeys'
import AuthApiService from './modules/services/api/authApiService'

import * as apiClient from '@/modules/repository/api/apiClient'
import UserAuthApiRepository from './modules/repository/api/userAuthApiRepository'

import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const authStore = useAuthStore()

app.provide<AuthService>(
  injectionKeys.UserService,
  new AuthApiService(
    new UserAuthApiRepository(apiClient.createInstance(import.meta.env.VITE_API_URL))
  )
)
app.use(router)

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth && !authStore.isAuthenticated) {
    next({ name: 'home' })
  }
  next()
})

app.mount('#app')
