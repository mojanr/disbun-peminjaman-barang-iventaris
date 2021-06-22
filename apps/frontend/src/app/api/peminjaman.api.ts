// import axios from 'axios'
import { ApiInstance } from './api'
// import { ENV } from '../config/env'

export class PeminjamanApi {

  async findAll() {
    return ApiInstance.get(`/peminjaman`)
  }

  async findOne(id: string) {
    return ApiInstance.get(`/peminjaman/${id}`)
  }

  async search(params: any) {
    return ApiInstance.get(`/peminjaman`, {
      params: params
    })
  }

  async peminjaman(data: any) {
    return ApiInstance.post(`/peminjaman`, data)
  }

  async pengembalian(id: string) {
    return ApiInstance.patch(`/peminjaman/pengembalian/${id}`, null)
  }

  async uploadBast(id: string) {
    return ApiInstance.patch(`/peminjaman/bast/${id}`, null)
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
