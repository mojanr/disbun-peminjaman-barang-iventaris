import axios, { AxiosInstance } from 'axios'
import { AuthApi } from './auth.api'
import { BarangApi } from './barang.api'
import { PegawaiApi } from './pegawai.api'
import { PeminjamanApi } from './peminjaman.api'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api'
})

// axios instance setting
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')?.replace(/"/g, "")}`
instance.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response
  }, (error) => {
    return Promise.reject(error.response.data)
  })

export const ApiInstance = instance
export class Service {

  AuthApi: AuthApi
  PeminjamanApi: PeminjamanApi
  PegawaiApi: PegawaiApi
  BarangApi: BarangApi

  constructor() {
    this.AuthApi = new AuthApi()
    this.PeminjamanApi = new PeminjamanApi()
    this.PegawaiApi = new PegawaiApi()
    this.BarangApi = new BarangApi()
  }
}

export const Api = new Service()

