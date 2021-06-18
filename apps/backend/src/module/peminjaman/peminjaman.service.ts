import { Injectable } from '@nestjs/common';

@Injectable()
export class PeminjamanService {

  constructor() {}

  findAll() {
    return ''
  }

  findOne(id) {
    return ''
  }

  find() {
    
  }

  // peminjaman
  peminjaman(user: any, nip: string, barang: string[], lamaHari: number) {

  }

  // upload dokumen berita acara
  beritaAcara(file: any) {

  }

  // pengembalian
  pengembalian(id: string) {

  }
  
}
