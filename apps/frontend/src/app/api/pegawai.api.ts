// import axios from 'axios'
import { ApiInstance } from './api'
// import { ENV } from '../config/env'

export class PegawaiApi {

  async findAll() {
    return ApiInstance.get(`/pegawai`)
  }

  async findOne(peg_nip: string) {
    return ApiInstance.get(`/pegawai/${peg_nip}`)
  }

  async search(params: any) {
    return ApiInstance.get(`/pegawai`, {
      params: params
    })
  }

  async syncAll() {
    return ApiInstance.patch(`/pegawai/sync`)
  }

  async syncOne(peg_nip: string) {
    return ApiInstance.patch(`/pegawai/${peg_nip}`)
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
