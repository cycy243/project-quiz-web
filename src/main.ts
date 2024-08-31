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

const app = createApp(App)

app.use(createPinia())

app.provide<AuthService>(
  injectionKeys.UserService,
  new AuthApiService(
    new UserAuthApiRepository(apiClient.createInstance(import.meta.env.VITE_API_URL))
  )
)
app.use(router)

app.mount('#app')
