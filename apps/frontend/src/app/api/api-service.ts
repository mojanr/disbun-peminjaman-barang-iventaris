import axios, { AxiosInstance } from 'axios'
// import { createContext, useContext } from 'react'
// import { AuthApi } from './auth.api'

export class ApiService {

  api: AxiosInstance
  // AuthApi: AuthApi

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
    // this.AuthApi = new AuthApi(this)
    this.api.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('token')}`

    console.log(this.api.defaults.headers)
  }
}

// export const Api = new ApiClass()

// const context = createContext(new Api())
// export const useApi = () => useContext(context)

