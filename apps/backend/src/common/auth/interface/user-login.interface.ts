import { ObjectID } from "typeorm";

export interface UserLoginInterface {
  token_siap?: string
  token_ews?: string
  token_fcm?: string
  pegawai?: {
    _id: ObjectID,
    peg_nip?: string
    peg_nama?: string
    peg_nama_lengkap?: string
    peg_gol?: string
    peg_pkt?: string
    peg_jabatan?: string
    peg_unit_kerja?: string
    atasan?: {
      peg_nip?: string
      peg_nama?: string
    },
  },
  role?: {
    id?: number,
    nama?: string
  }
}