export interface FormInputProps<T> {
  error?: string
  title: string
  name: string
  id?: string
  placeholder?: string
  defaultValue?: T
  type: string
}
