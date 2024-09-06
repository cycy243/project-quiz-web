<template>
  <div class="register_view page_view">
    <h2 class="page_title">Sign in</h2>
    <div class="wrapper form_wrapper">
      <p v-if="errorMsg" class="error_message">{{ errorMsg }}</p>
      <div v-if="showSuccessMessage" class="success_message">
        <p>You have just sucessfully registered</p>
        <p>You can now go login <RouterLink :to="{ name: 'login' }">here</RouterLink></p>
      </div>
      <form @submit="onSubmit">
        <FormInput
          :name="'login'"
          :title="'Login'"
          :defaultValue="login"
          :error="errors.login"
          :type="'text'"
          v-model="login"
          v-bind="loginProps"
        />
        <FormInput
          :name="'password'"
          :title="'Password'"
          :defaultValue="password"
          :error="errors.password"
          :type="'password'"
          v-model="password"
          v-bind="passwordProps"
        />
        <ActionButton>Sign up</ActionButton>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import FormInput from '../../components/form/FormInput.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import * as rules from '../../modules/validation/rules'
import { inject, ref } from 'vue'

import { useAuthStore } from '@/stores/auth'

import * as InjectionKeys from '@/modules/utils/injectionKeys'
import type AuthService from '@/modules/services/authService'

const authStore = useAuthStore()

const showSuccessMessage = ref(false)

const schema = yup.object({
  login: rules.login,
  password: rules.password
})

interface LoginForm {
  login: String
  password: String
}

const { defineField, errors, handleSubmit } = useForm<LoginForm>({
  validationSchema: schema
})

const errorMsg = ref<string>()

const onSubmit = handleSubmit(
  async (values: LoginForm) => {
    errorMsg.value = undefined
    try {
      var result = await userService.loginWithLogin(
        values.login.toString(),
        values.password.toString()
      )
      showSuccessMessage.value = true
      authStore.logInUser(result!)
    } catch (error) {
      errorMsg.value = (error as any).message
    }
  },
  () => {
    errorMsg.value = 'One or more validation error occured'
  }
)

const userService = inject<AuthService>(InjectionKeys.UserService) as AuthService

const [login, loginProps] = defineField('login')
const [password, passwordProps] = defineField('password')
</script>
<style lang="css" scoped>
.register_view {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.form_wrapper form {
  display: flex;
  flex-direction: column;
}

.form_wrapper {
  width: fit-content;
  justify-content: center;
}

.form_wrapper .input_wrapper {
  margin-block: 0.2rem;
}

.form_wrapper .action_btn {
  width: fit-content;
  align-self: center;
}
</style>
