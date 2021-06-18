import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthLocalGuard } from './auth.local.guard';
import { AuthJwtGuard } from './auth.jwt.guard';
import { AuthService } from './auth.service';
import { UserLogin } from './decorator/user-login.decorator';
import { LoginDto } from './dto/login.dto';
import { UserLoginInterface } from './interface/user-login.interface';
import { UserJwt } from './decorator/user-jwt.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @UseGuards(AuthLocalGuard)
  @Post('login')
  async login(@UserLogin() user: UserLoginInterface, @Body() loginData: LoginDto) {
    // console.log(req.user)
    // return 'test'
    
    // sync user
    await this.authService.syncUser(user)
    
    // set user login pegawai _id mongodb
    // user.pegawai._id = result._id

    // remove unused props
    delete user.token_siap
    delete user.token_fcm

    // return user login info
    return user
  }

  @ApiBearerAuth()
  @UseGuards(AuthJwtGuard)
  @Post('logout')
  async logout(@UserJwt() user: UserLoginInterface) {
    try {
      // remove token
      await this.authService.removeTokenFcm(user.pegawai.peg_nip) 
      return {
        result: true
      }
    } catch (error) {
      throw error
    }
  }

}
