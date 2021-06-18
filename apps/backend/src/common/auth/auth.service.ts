import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { User } from '../database/entities/user.entity';
import { UserLoginInterface } from './interface/user-login.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) { }

  // find one
  findOne(_id: ObjectID) {
    return this.userRepo.findOneOrFail(_id)
  }

  // find user
  findUser(nip: string) {
    return this.userRepo.findOneOrFail(nip)
  }

  // sync user access
  async syncUser(user: UserLoginInterface) {
    // find user
    const isUserExist = await this.userRepo.findOne({
      select: ['id'],
      where: {
        id: user.pegawai.peg_nip
      }
    })

    if (isUserExist) {
      // update
      const result = await this.userRepo.update(isUserExist.nip, {
        id: user.pegawai.peg_nip,
        nip: user.pegawai.peg_nip,
        nama: user.pegawai.peg_nama_lengkap,
        golongan: user.pegawai.peg_gol,
        unit_kerja: user.pegawai.peg_unit_kerja,
        jabatan: user.pegawai.peg_jabatan,
        pangkat: user.pegawai.peg_pkt,
        token_siap: user.token_siap,
      })

      Logger.verbose(`Update ${user.pegawai.peg_nip} - ${user.pegawai.peg_nama}`, 'AuthService - SyncUser')

      // const updateResult = await this.findUser(isUserExist._id)

      return result
    } else {
      // create
      const result = await this.userRepo.save({
        id: user.pegawai.peg_nip,
        nip: user.pegawai.peg_nip,
        nama: user.pegawai.peg_nama_lengkap,
        golongan: user.pegawai.peg_gol,
        unit_kerja: user.pegawai.peg_unit_kerja,
        jabatan: user.pegawai.peg_jabatan,
        pangkat: user.pegawai.peg_pkt,
        token_siap: user.token_siap,
      })

      Logger.verbose(`Create ${user.pegawai.peg_nip} - ${user.pegawai.peg_nama}`, 'AuthService - SyncUser')

      return result
    }


  }

  // set token fcm
  setTokenFcm(nip: string, tokenFcm: string) {
    return this.userRepo.update({
      nip: nip
    }, {
      token_fcm: tokenFcm
    })
  }

  // remove token fcm
  removeTokenFcm(nip: string) {
    return this.userRepo.update(nip, {
      token_fcm: null
    })
  }
}
