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

  // findAll() {
  //   return ''
  // }

  // findOne(id) {
  //   return ''
  // }

  // find() {
    
  // }

  // peminjaman
  peminjaman(user: any, nip: string, barang: string[], tgl_pinjam, tgl_estimasi_kembali, tgl_kembali) {

  }

  // upload dokumen berita acara
  beritaAcara(file: any) {

  }

  // pengembalian
  pengembalian(id: string) {

  }
  
}
