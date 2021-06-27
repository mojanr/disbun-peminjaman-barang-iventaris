import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SiapJabarAuthService } from '../siap-jabar/siap-jabar-auth.service';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private siapJabarAuthService: SiapJabarAuthService  
  ) {
    super();
  }

  validate(username: string, password: string) {
    // return await this.authService.login({ username: username, password: password });
    return this.siapJabarAuthService.login(username, password)
    // const user = await this.authService.getRepo().findOne(result.)
  }
}