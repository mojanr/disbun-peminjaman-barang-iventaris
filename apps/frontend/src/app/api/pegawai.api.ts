import axios from 'axios'
import { ENV } from '../config/env'

export class Pegawai {

  public static findAll() {
    return axios.get(`${ENV.baseUrl}/pegawai`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findOne(peg_nip: string) {
    return axios.get(`${ENV.baseUrl}/pegawai/${peg_nip}`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static search(params: any) {
    return axios.get(`${ENV.baseUrl}/pegawai`, {
      params: params
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static syncAll(token: string) {
    return axios.patch(`${ENV.baseUrl}/pegawai/sync`, null, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static syncOne(peg_nip: string, token: string) {
    return axios.patch(`${ENV.baseUrl}/pegawai/${peg_nip}`, null, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    }).catch((error) => {
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
