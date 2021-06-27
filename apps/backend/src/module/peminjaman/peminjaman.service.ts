import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { TemplateBeritaAcaraPeminjaman } from '../../assets/template/template-berita-acara-peminjaman';
import { AuthService } from '../../common/auth/auth.service';
import { Peminjaman } from '../../common/database/entities/peminjaman.entity';
import { DocumentExport } from '../../common/util/document-exporter';
import { PegawaiService } from '../pegawai/pegawai.service';
import { UserService } from '../user/user.service';
import * as dayjs from 'dayjs'

@Injectable()
export class PeminjamanService extends TypeOrmCrudService<Peminjaman> {

  constructor(
    @InjectRepository(Peminjaman) private peminjamanRepo: Repository<Peminjaman>,
    private authService: AuthService,
    private pegawaiServicec: PegawaiService,
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
  async uploadBast(id: number, fileName: string) {
    const peminjaman = await this.peminjamanRepo.findOne(id)
    peminjaman.bast = fileName

    return this.peminjamanRepo.save(peminjaman)
  }

  // view uploaded bast
  async viewUploadedBast(id: string) {
    // const peminjaman = await this.peminjamanRepo.findOne(id)
    // return await this.peminjamanRepo.save(peminjaman)
  }

  // download template bast
  async downloadTemplateBast(id: number): Promise<{ doc, fileName }> {
    dayjs.locale('id')
    
    // get peminjaman
    const resultPeminjaman = await this.peminjamanRepo.findOne(id)
    // serialize
    const peminjam = JSON.parse(resultPeminjaman.peminjam)
    const barang = JSON.parse(resultPeminjaman.barang)

    const userPengelolaBarang = await this.authService.getRepo().findOne({
      where: {
        role: 'pengelola_barang'
      }
    })
    const pengelolaBarang = await this.pegawaiServicec.getRepo().findOne(userPengelolaBarang.id)

    const templateData: TemplateBeritaAcaraPeminjaman = {
      peminjam_peg_id: peminjam.peg_id,
      peminjam_peg_nip: peminjam.peg_nip,
      peminjam_peg_nama: peminjam.peg_nama,
      peminjam_peg_nama_lengkap: peminjam.peg_nama_lengkap,
      peminjam_peg_foto_url: peminjam.peg_foto_url,
      peminjam_jabatan_nama: peminjam.jabatan_nama,
      peminjam_unit_kerja_nama: peminjam.unit_kerja_nama,
      peminjam_no_hp: peminjam.peg_telp_hp,
      pengelola_barang_nip: pengelolaBarang.peg_nip,
      pengelola_barang_nama: pengelolaBarang.peg_nama_lengkap,
      pengelola_barang_jabatan_nama: pengelolaBarang.jabatan_nama,
      barang_kode_barang: barang.kode_barang,
      barang_tipe_asset: barang.tipe_asset,
      barang_tipe_barang: barang.tipe_barang,
      barang_nama_barang: barang.nama_barang,
      barang_jenis_barang: barang.jenis_barang,
      barang_merk: barang.merk,
      barang_no_polisi: barang.no_polisi,
      barang_alamat: barang.alamat,
      barang_luas: barang.luas,
      maksud_penggunaan: resultPeminjaman.maksud_penggunaan,
      sopir: resultPeminjaman.sopir,
      tgl_penggunaan_awal: dayjs(resultPeminjaman.tgl_penggunaan_awal).format('DD-MM-YYYY'),
      tgl_penggunaan_akhir: dayjs(resultPeminjaman.tgl_penggunaan_akhir).format('DD-MM-YYYY'),
      tgl_pinjam: dayjs(resultPeminjaman.tgl_pinjam).format('DD-MMMM-YYYY'),
      tgl_kembali: dayjs(resultPeminjaman.tgl_kembali).format('DD-MM-YYYY'),
      bast: resultPeminjaman.bast,
      status_peminjaman: resultPeminjaman.status_peminjaman,
    }

    console.log(templateData)

    let templateName = null
    if (templateData.barang_no_polisi) {
      templateName = 'template-berita-acara-peminjaman-kendaraan'
    } else {
      templateName = 'template-berita-acara-peminjaman-peralatan'
    }

    const doc = DocumentExport.export(templateData, templateName)

    return new Promise((resolve, reject) => {
      resolve({
        doc: doc,
        fileName: `Berita Acara Peminjaman - ${peminjam?.peg_nip} - ${peminjam.peg_nama}.docx`
      })
    })

  }

}
