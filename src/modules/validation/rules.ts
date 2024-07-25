import * as yup from 'yup'

export const email = yup.string().required().email()
export const pseudo = yup.string().required()
export const password = yup
  .string()
  .required()
  .test('len', 'The password must have 8 caracters minimum', (value) => value.length >= 8)
export const confirmationPassword = yup
  .string()
  .required()
  .oneOf([yup.ref('password')], 'Passwords must match')
export const firstName = yup.string().required()
export const lastName = yup.string().required()
export const birthdate = yup
  .date()
  .required()
  .test('age', 'User must be 13 years old to be on the plateform')
