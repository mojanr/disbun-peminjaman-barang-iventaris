import axios from 'axios'
import { ENV } from '../config/env'

export class MenuApi {

  public static findAll() {
    return axios.get(`${ENV.baseUrl}/menu`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findByRole(role_id: any) {
    return axios.get(`${ENV.baseUrl}/menu/${role_id}`).catch((error) => {
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
