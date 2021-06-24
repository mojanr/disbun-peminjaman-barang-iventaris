import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../../common/auth/auth.service';
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';
import { DocumentExport } from '../../common/util/document-exporter';
import { UserService } from '../user/user.service';

@Injectable()
export class PeminjamanService extends TypeOrmCrudService<Peminjaman> {

  constructor(
    @InjectRepository(Peminjaman) private peminjamanRepo: Repository<Peminjaman>,
    private authService: AuthService
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
  async downloadTemplateBast(id: number): Promise<{ doc, fileName }> {
    // get peminjaman
    const resultPeminjaman = await this.peminjamanRepo.findOne(id)
    // serialize
    const peminjam = JSON.parse(resultPeminjaman.peminjam)
    const barang = JSON.parse(resultPeminjaman.barang)

    const pengelolaBarang = await this.authService.getRepo().findOne({
      where: {
        role: 'pengelola_barang'
      }
    })

    const templateData = {}

    const doc = DocumentExport.export(templateData, 'template-berita-acara-peminjaman')

    return new Promise((resolve, reject) => {
      resolve({
        doc: doc,
        fileName: `Berita Acara Peminjaman - ${peminjam?.peg_nip} - ${peminjam.peg_nama}.docx`
      })
    }) 
    
  }

}
