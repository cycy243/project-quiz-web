import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/modules/domain/user'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const connectedUser = ref<User | null>(null)
  function logInUser(user: User) {
    connectedUser.value = user
    isAuthenticated.value = true
  }
  function logOutUser() {
    connectedUser.value = null
    isAuthenticated.value = false
  }

  return { isAuthenticated, connectedUser, logInUser, logOutUser }
})
