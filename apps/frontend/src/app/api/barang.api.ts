import axios from 'axios'
import { ENV } from '../config/env'

export class Barang {

  public static findAllKibA() {
    return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findAllKibB() {
    return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findAllKibC() {
    return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findAllKibD() {
    return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findAllKibE() {
    return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static findOne(id: string) {
    return axios.get(`${ENV.baseUrl}/barang/${id}`).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static search(params: any) {
    return axios.get(`${ENV.baseUrl}/barang`, {
      params: params
    }).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static peminjaman(data: any) {
    return axios.post(`${ENV.baseUrl}/barang`, data).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static pengembalian(id: string) {
    return axios.patch(`${ENV.baseUrl}/barang/pengembalian/${id}`, null).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

  public static uploadBast(id: string) {
    return axios.patch(`${ENV.baseUrl}/barang/bast/${id}`, null).catch((error) => {
      return Promise.reject(error.response.data)
    })
  }

}
