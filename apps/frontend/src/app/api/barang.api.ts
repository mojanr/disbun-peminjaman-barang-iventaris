// import axios from 'axios'
import { ApiInstance } from './api'
// import { ENV } from '../config/env'

export class BarangApi {


  async findAll() {
    return ApiInstance.get(`/barang`)
  }

  async findOne(kode_barang: string) {
    return ApiInstance.get(`/barang/${kode_barang}`)
  }

  async search(params: any) {
    return ApiInstance.get(`/barang?${params}`)
  }

  // public static findAllKibA() {
  //   return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static findAllKibB() {
  //   return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static findAllKibC() {
  //   return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static findAllKibD() {
  //   return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static findAllKibE() {
  //   return axios.get(`${ENV.baseUrl}/barang`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static findOne(id: string) {
  //   return axios.get(`${ENV.baseUrl}/barang/${id}`).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static search(params: any) {
  //   return axios.get(`${ENV.baseUrl}/barang`, {
  //     params: params
  //   }).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static peminjaman(data: any) {
  //   return axios.post(`${ENV.baseUrl}/barang`, data).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static pengembalian(id: string) {
  //   return axios.patch(`${ENV.baseUrl}/barang/pengembalian/${id}`, null).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

  // public static uploadBast(id: string) {
  //   return axios.patch(`${ENV.baseUrl}/barang/bast/${id}`, null).catch((error) => {
  //     return Promise.reject(error.response.data)
  //   })
  // }

}
