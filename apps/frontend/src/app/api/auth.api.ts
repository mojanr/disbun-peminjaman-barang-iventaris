import { ENV } from '../config/env'
import { ApiInstance } from './api'

export class AuthApi {

  async login(username: string, password: string) {
    return ApiInstance.post(`/auth/login`, {
      username: username,
      password: password
    })
  }

  async logout() {
    return ApiInstance.post(`${ENV.baseUrl}/auth/logout`)
  }

  // public static login(username: string, password: string) {
  //   return axios.post(`${ENV.baseUrl}/auth/login`, {
  //     username: username,
  //     password: password
  //   }).then((res) => {

  //   })
  //   .catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static logout(token: string) {
  //   return axios.post(`${ENV.baseUrl}/auth/logout`, null, {
  //     headers: {
  //       Authorization: `bearer ${token}`
  //     }
  //   }).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

}

// export const AuthApi = new AuthApiClass()
