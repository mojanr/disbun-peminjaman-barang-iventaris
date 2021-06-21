import axios, { AxiosInstance } from 'axios'
// import { createContext, useContext } from 'react'
// import { AuthApi } from './auth.api'

export class ApiClass {

  instance: AxiosInstance
  // AuthApi: AuthApi

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3333/api'
    })
    // this.AuthApi = new AuthApi(this)
  }

  setToken(token: any) {
    this.instance.defaults.headers.common['Authorization'] = `bearer ${token}`
  }
}

// export const Api = new ApiClass()

// const context = createContext(new Api())
// export const useApi = () => useContext(context)