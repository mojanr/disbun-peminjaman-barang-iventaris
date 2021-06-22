import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthLocalStrategy } from './auth.local.strategy';
import { AuthJwtStrategy } from './auth.jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user.entity';
import { PegawaiModule } from '../../module/pegawai/pegawai.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'Disbun-EWS-SuperSecretKey-2020123',
      signOptions: { 
        // expiresIn: '60s'
      },
    }),
    PegawaiModule
  ],
  providers: [AuthService, AuthLocalStrategy, AuthJwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
