import axios from 'redaxios'

let instance: any = undefined

export function getInstance() {
  if (!instance) {
    throw new Error("The redaxios instance isn't set yet.")
  }
}

export function createInstance(baseUrl: string) {
  return (instance = axios.create({
    baseURL: baseUrl,
    responseType: 'json'
  }))
}
