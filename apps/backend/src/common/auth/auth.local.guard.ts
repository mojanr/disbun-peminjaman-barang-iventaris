import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { LoginResponseInterface } from '../siap-jabar/interface/login-response.interface';
import { AuthService } from './auth.service';
import { UserLoginInterface } from './interface/user-login.interface';

@Injectable()
export class AuthLocalGuard extends AuthGuard('local') {

  constructor(private jwtService: JwtService, private authService: AuthService) {
    super()
  }

  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err
      // throw new UnauthorizedException()
    }

    const userLogin: LoginResponseInterface = user


    // return data
    const userInfo: UserLoginInterface = {
      token_siap: userLogin.token,
      token_ews: null,
      token_fcm: null,
      pegawai: {
        _id: null,
        peg_nip: userLogin.user?.pegawai?.peg_nip || user.user?.id,
        peg_nama: userLogin.user?.pegawai?.peg_nama || user.user?.nama,
        peg_nama_lengkap: userLogin.user?.pegawai?.peg_nama_lengkap || user.user?.nama,
        peg_gol: userLogin.user?.pegawai?.nm_gol_akhir || '-',
        peg_pkt: userLogin.user?.pegawai?.nm_pkt_akhir || '-',
        peg_jabatan: userLogin.user?.pegawai?.jabatan_nama || '-',
        peg_unit_kerja: userLogin.user?.pegawai?.unit_kerja_nama || '-',
        atasan: {
          peg_nip: userLogin.user?.pegawai?.nip_atasan || user.user?.pegawai?.nip_atasan_bayangan || '-',
          peg_nama: userLogin.user?.pegawai?.nama_atasan || user.user?.pegawai?.nama_atasan_bayangan || '-',
        },
      },
      role: {
        id: userLogin?.user?.skpd_role?.id,
        nama: userLogin?.user?.skpd_role?.role_name
      }
    }

    // set token ews
    userInfo.token_ews = this.jwtService.sign({ pegawai: userInfo.pegawai, role: userInfo.role })

    // override
    user = userInfo

    return user
  }
}