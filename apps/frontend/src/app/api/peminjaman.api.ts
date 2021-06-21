import axios from 'axios'
import { ENV } from '../config/env'

export class Peminjaman {

  public static findAll() {
    return axios.get(`${ENV.baseUrl}/peminjaman`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findOne(id: string) {
    return axios.get(`${ENV.baseUrl}/peminjaman/${id}`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static search(params: any) {
    return axios.get(`${ENV.baseUrl}/peminjaman`, {
      params: params
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static peminjaman(data: any) {
    return axios.post(`${ENV.baseUrl}/peminjaman`, data).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static pengembalian(id: string) {
    return axios.patch(`${ENV.baseUrl}/peminjaman/pengembalian/${id}`, null).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static uploadBast(id: string) {
    return axios.patch(`${ENV.baseUrl}/peminjaman/bast/${id}`, null).catch((error) => {
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
