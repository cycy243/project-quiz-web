<template>
  <div>
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
  </div>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import FormInput from '../../components/form/FormInput.vue'
import * as rules from '../../modules/validation/rules'

const schema = yup.object({
  email: rules.email,
  pseudo: rules.password,
  password: rules.password,
  confirmationPassword: rules.confirmationPassword,
  firstName: rules.firstName,
  lastName: rules.lastName,
  birthdate: rules.birthdate
})

interface RegisterForm {
  email: String
  pseudo: String
  password: String
  confirmationPassword: String
  firstName: String
  lastName: String
  birthdate: Date
}

const { values, defineField, errors } = useForm<RegisterForm>({
  validationSchema: schema
})

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
const [confirmationPassword, confirmationPasswordProps] = defineField('confirmationPassword')
const [lastName, lastNameProps] = defineField('lastName')
const [firstName, firstNameProps] = defineField('firstName')
const [birthdate, birthdateProps] = defineField('birthdate')
const [pseudo, pseudoProps] = defineField('pseudo')
</script>
<style lang="css" scoped></style>
