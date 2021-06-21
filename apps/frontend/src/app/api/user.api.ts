import axios from 'axios'
import { ENV } from '../config/env'

export class UserApi {

  public static findAll() {
    return axios.get(`${ENV.baseUrl}/user`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }
  
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
