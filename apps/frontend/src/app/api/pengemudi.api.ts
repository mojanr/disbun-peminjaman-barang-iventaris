// import axios from 'axios'
import { ApiInstance } from './api'
// import { ENV } from '../config/env'

export class PengemudiApi {

  async findAll() {
    return ApiInstance.get(`/pengemudi`)
  }

  async findOne(ktp: string) {
    return ApiInstance.get(`/pengemudi/${ktp}`)
  }

  async search(params: any) {
    return ApiInstance.get(`/pengemudi?${params}`)
  }

  async syncAll() {
    return ApiInstance.patch(`/pengemudi/sync`)
  }

  async syncOne(ktp: string) {
    return ApiInstance.patch(`/pengemudi/${ktp}`)
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
