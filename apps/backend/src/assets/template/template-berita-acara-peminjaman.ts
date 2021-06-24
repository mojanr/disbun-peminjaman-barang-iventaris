import { Barang } from "../../common/database/entities/barang.entity";

export interface TemplateBeritaAcaraPeminjaman {

  pengelola_barang_nip: string
  pengelola_barang_nama: string
  pengelola_barang_jabatan_nama: string
  
  peminjam_peg_id: string
  peminjam_peg_nip: string
  peminjam_peg_nama: string
  peminjam_peg_nama_lengkap: string
  peminjam_peg_foto_url: string
  peminjam_jabatan_nama: string
  peminjam_unit_kerja_nama: string
  // peminjam: {
  //   peg_id: string
  //   peg_nip: string
  //   peg_nama: string
  //   peg_nama_lengkap: string
  //   peg_foto_url: string
  //   jabatan_nama: string
  //   unit_kerja_nama: string
  // }

  barang_kode_barang?: string
  barang_tipe_asset?: string
  barang_tipe_barang?: string
  barang_nama_barang?: string
  barang_jenis_barang?: string
  barang_merk?: string
  barang_no_polisi?: string
  barang_alamat?: string
  barang_luas?: string
  // barang: {
  //   kode_barang: string
  //   tipe_asset: string
  //   tipe_barang: string
  //   nama_barang: string
  //   jenis_barang: string
  //   merk: string
  //   no_polisi: string
  //   alamat: string
  //   luas: string
  // }

  maksud_penggunaan: string
  sopir?: string
  tgl_penggunaan_awal: string
  tgl_penggunaan_akhir: string
  tgl_pinjam: string
  tgl_kembali?: string
  bast?: string
  status_peminjaman: number

}