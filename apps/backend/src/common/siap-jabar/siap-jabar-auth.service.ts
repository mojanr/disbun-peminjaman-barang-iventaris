import { HttpService, Injectable, UnauthorizedException } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { LoginResponseInterface } from './interface/login-response.interface';

@Injectable()
export class SiapJabarAuthService {

  constructor(
    private httpService: HttpService
  ) { }

  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get('http://localhost:3000/cats');
  // }

  // login siap jabar
  async login(username: string, password: string) {
    // login api
    try {
      const result = await this.httpService
        .post('https://siap.jabarprov.go.id/p/backend/api/login', {
          "username": username,
          "password": password
        }).pipe(map(response => response.data)).toPromise<LoginResponseInterface>()
      // console.log(result)
      return result
    } catch (error) {
      throw new UnauthorizedException('Username atau password yang anda masukkan salah')
    }
  }

}