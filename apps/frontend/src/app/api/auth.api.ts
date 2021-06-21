import axios, { AxiosInstance } from 'axios'
import { ENV } from '../config/env'
import { ApiClass } from './api'

export class AuthApi extends ApiClass {

  // api: ApiClass

  constructor() {
    // this.api = api
    // console.log(this.api)
    super()
  }

  public static login(username: string, password: string) {
    return axios.post(`${ENV.baseUrl}/auth/login`, {
      username: username,
      password: password
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static logout(token: string) {
    return axios.post(`${ENV.baseUrl}/auth/logout`, null, {
      headers: {
        Authorization: `bearer ${token}`
      }
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

}

// export const AuthApi = new AuthApiClass()
