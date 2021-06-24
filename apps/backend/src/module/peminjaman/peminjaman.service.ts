import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';

@Injectable()
export class PeminjamanService extends TypeOrmCrudService<Peminjaman> {

  constructor(
    @InjectRepository(Peminjaman) private peminjamanRepo: Repository<Peminjaman>
  ) {
    super(peminjamanRepo)
  }

  // pengembalian
  async pengembalian(id: number) {
    const peminjaman = await this.peminjamanRepo.findOne(id)
    peminjaman.status_peminjaman = 2
    return await this.peminjamanRepo.save(peminjaman)
  }

  // upload bast
  uploadBast(id: string) {
  }

  // view uploaded bast
  async viewUploadedBast(id: string) {
    // const peminjaman = await this.peminjamanRepo.findOne(id)
    // return await this.peminjamanRepo.save(peminjaman)
  }

  // download template bast
  downloadTemplateBast(id: string) {
    // console.log('cache')
    // return this.base.getOneBase(req)
  }

}
