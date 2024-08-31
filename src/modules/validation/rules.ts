import * as yup from 'yup'

const VALID_FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
const MAX_SIZE = 1024 * 1024 * 20

export const email = yup
  .string()
  .required('The email is required')
  .email('You need to enter a valid email')
export const login = yup.string().required('The login is required')
export const pseudo = yup.string().required('The pseudo is required')
export const password = yup
  .string()
  .required('The password is required')
  .test('len', 'The password must have 8 caracters minimum', (value) => value.length >= 8)
export const confirmationPassword = yup
  .string()
  .required()
  .oneOf([yup.ref('password')], 'Passwords must match')
export const firstName = yup.string().required('The firstname is required')
export const lastName = yup.string().required('The lastname is required')
export const birthdate = yup
  .date()
  .required('The birthdate is required')
  .test(
    'age',
    'User must be 13 years old to be on the plateform',
    (date) =>
      Math.abs(new Date().getTime() - ((date ? new Date(date) : new Date()).getTime() || 0)) /
        (1000 * 60 * 60 * 24 * 365.25) >=
      13
  )
export const avatarImg = yup
  .mixed()
  .required('You must provide an avatar')
  .test('is-valid-type', 'The type of the avatar must be: jpg, jpeg, gif, png', (value) => {
    const file = value as File
    return VALID_FILE_TYPES.includes(file.type)
  })
  .test('is-valid-size', 'The size of the avatar mustnot exceed 20 MB', (value) => {
    const file = value as File
    return file.size <= MAX_SIZE
  })
