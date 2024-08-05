<template>
  <div class="register_view page_view">
    <h2 class="page_title">Sign in</h2>
    <div class="wrapper form_wrapper">
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <div v-if="showSuccessMessage">
        <p>You have just sucessfully registered</p>
        <p>You can now go login <RouterLink :to="{ name: 'login' }">here</RouterLink></p>
      </div>
      <form @submit="onSubmit">
        <FormInput
          :name="'email'"
          :title="'Email'"
          :defaultValue="email"
          :error="errors.email"
          :type="'email'"
          v-model="email"
          v-bind="emailProps"
        />
        <FormInput
          :name="'lastName'"
          :title="'Lastname'"
          :defaultValue="lastName"
          :error="errors.lastName"
          :type="'text'"
          v-model="lastName"
          v-bind="lastNameProps"
        />
        <FormInput
          :name="'firstName'"
          :title="'Firstname'"
          :defaultValue="firstName"
          :error="errors.firstName"
          :type="'text'"
          v-model="firstName"
          v-bind="firstNameProps"
        />
        <FormInput
          :name="'pseudo'"
          :title="'Pseudo'"
          :defaultValue="pseudo"
          :error="errors.pseudo"
          :type="'text'"
          v-model="pseudo"
          v-bind="pseudoProps"
        />
        <FormInput
          :name="'birthdate'"
          :title="'Birthdate'"
          :defaultValue="birthdate"
          :error="errors.birthdate"
          :type="'date'"
          v-model="birthdate"
          v-bind="birthdateProps"
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
        <FormInput
          :name="'confirmationPassword'"
          :title="'Confirmation password'"
          :defaultValue="confirmationPassword"
          :error="errors.confirmationPassword"
          :type="'password'"
          v-model="confirmationPassword"
          v-bind="confirmationPasswordProps"
        />
        <FormFileInput
          :name="'file'"
          :title="'Avatar'"
          :defaultValue="file"
          :error="errors.file"
          :type="'file'"
          v-model="file"
          v-bind="fileProps"
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

import * as InjectionKeys from '@/modules/utils/injectionKeys'
import type AuthService from '@/modules/services/authService'
import FormFileInput from '@/components/form/FormFileInput.vue'

const showSuccessMessage = ref(false)

const schema = yup.object({
  email: rules.email,
  pseudo: rules.password,
  password: rules.password,
  confirmationPassword: rules.confirmationPassword,
  firstName: rules.firstName,
  lastName: rules.lastName,
  birthdate: rules.birthdate,
  file: rules.avatarImg
})

interface RegisterForm {
  email: String
  pseudo: String
  password: String
  bio: string
  confirmationPassword: String
  firstName: String
  lastName: String
  birthdate: string
  file: File
}

const { defineField, errors, handleSubmit } = useForm<RegisterForm>({
  validationSchema: schema
})

const errorMsg = ref<string>()

const onSubmit = handleSubmit(
  async (values: RegisterForm) => {
    errorMsg.value = undefined
    try {
      await userService.registerUser({
        bio: values.bio,
        birthDate: values.birthdate,
        email: values.email.toString(),
        pseudo: values.pseudo.toString(),
        firstname: values.firstName.toString(),
        name: values.lastName.toString(),
        file: values.file,
        password: values.password.toString()
      })
      showSuccessMessage.value = true
    } catch (error) {
      errorMsg.value = (error as any).message
    }
  },
  () => {
    errorMsg.value = 'One or more validation error occured'
  }
)

const userService = inject<AuthService>(InjectionKeys.UserService) as AuthService

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
const [confirmationPassword, confirmationPasswordProps] = defineField('confirmationPassword')
const [lastName, lastNameProps] = defineField('lastName')
const [firstName, firstNameProps] = defineField('firstName')
const [birthdate, birthdateProps] = defineField('birthdate')
const [pseudo, pseudoProps] = defineField('pseudo')
const [file, fileProps] = defineField('file', {
  validateOnModelUpdate: true
})
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
