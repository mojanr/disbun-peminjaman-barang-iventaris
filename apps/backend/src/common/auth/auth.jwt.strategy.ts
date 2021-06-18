import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PegawaiService } from 'src/module/pegawai/pegawai.service';
import { AuthService } from './auth.service';
import { info } from 'console';
import { UserLoginInterface } from './interface/user-login.interface';
// import { jwtConstants } from './constants';

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'Disbun-EWS-SuperSecretKey-2020123',
    });
  }

  async validate(payload: UserLoginInterface) {
    
    // get user
    const user = await this.authService.findUser(payload.pegawai.peg_nip)
    payload.token_siap = user.token_siap
    payload.token_fcm = user.token_fcm

    return payload
    // const userAccess = await this.authService.findUserAccess(payload.pegawai.nip)

    // // // check if token siap is not null
    // // if (!userAccess.tokenSiap) {
    // //   throw new UnauthorizedException('Token siap tidak tersedia')
    // // }

    // let pegawai = null

    // if (payload.role.nama === 'SKPD') {
    //   // set pegawai as default
    //   pegawai = payload.pegawai
    // } else {
    //   // get detail pegawai
    //   pegawai = await this.pegawaiService.findById(userAccess.nip)
    // }

    // // set user info
    // const userInfo = {
    //   access: {
    //     ...userAccess,
    //     role: payload.role
    //   },
    //   info: pegawai
    // }

    // // return user info
    // return userInfo;
  }
}