import axios, { AxiosInstance } from 'axios'

export function createHttpClient(baseURL: string): AxiosInstance {
  return axios.create({
    baseURL,
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
