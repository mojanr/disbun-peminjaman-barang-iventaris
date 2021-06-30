import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';
import * as dayjs from 'dayjs'

@Entity({ name: 'tr_peminjaman' })
export class Peminjaman {

  @PrimaryGeneratedColumn({ name: 'id' })
  // @Expose({ toPlainOnly: true })
  id: string

  
  @Column({ type: 'text', name: 'peminjam' })
  // @Expose({ toPlainOnly: true })
  peminjam: string

  @Column({ type: 'text', name: 'barang' })
  // @Expose({ toPlainOnly: true })
  barang: string


  // @Column({ type: 'varchar', name: 'peg_nip' })
  // // @Expose({ toPlainOnly: true })
  // peg_nip: string

  // @Column({ type: 'varchar', name: 'peg_nama', nullable: true, default: null })
  // peg_nama: string

  // @Column({ type: 'varchar', name: 'peg_nama_lengkap', nullable: true, default: null })
  // peg_nama_lengkap: string

  // @Column({ type: 'text', name: 'peg_foto_url', nullable: true, default: null })
  // peg_foto_url: string

  // @Column({ type: 'varchar', name: 'peg_telp', nullable: true, default: null })
  // peg_telp: string

  // @Column({ type: 'varchar', name: 'peg_telp_hp', nullable: true, default: null })
  // peg_telp_hp: string

  // @Column({ type: 'varchar', name: 'golongan' })
  // // @Expose({ toPlainOnly: true })
  // golongan: string

  // @Column({ type: 'int', name: 'jabatan_id', nullable: true, default: null })
  // jabatan_id: number

  // @Column({ type: 'varchar', name: 'jabatan_nama', nullable: true, default: null })
  // jabatan_nama: string

  // @Column({ type: 'text', name: 'nm_gol_akhir', nullable: true, default: null })
  // nm_gol_akhir: string

  // @Column({ type: 'text', name: 'nm_pkt_akhir', nullable: true, default: null })
  // nm_pkt_akhir: string

  // @Column({ type: 'varchar', name: 'unit_kerja_id', nullable: true, default: null })
  // unit_kerja_id: string

  // @Column({ type: 'varchar', name: 'unit_kerja_nama', nullable: true, default: null })
  // unit_kerja_nama: string

  // @Column({ type: 'varchar', name: 'tipe_barang' })
  // // @Expose({ toPlainOnly: true })
  // tipe_barang: string

  @Column({ type: 'text', name: 'maksud_penggunaan' })
  // @Expose({ toPlainOnly: true })
  maksud_penggunaan: string

  @Column({ type: 'text', name: 'sopir', nullable: true, default: null })
  // @Expose({ toPlainOnly: true })
  sopir: string

  @Column({ type: 'date', name: 'tgl_penggunaan_awal' })
  // @Expose({ toPlainOnly: true })
  tgl_penggunaan_awal: string

  @Column({ type: 'date', name: 'tgl_penggunaan_akhir' })
  // @Expose({ toPlainOnly: true })
  tgl_penggunaan_akhir: string

  @Column({ type: 'date', name: 'tgl_pinjam', nullable: true, default: dayjs().format('YYYY-MM-DD') })
  // @Expose({ toPlainOnly: true })
  tgl_pinjam: string

  @Column({ type: 'date', name: 'tgl_kembali', nullable: true, default: null })
  // @Expose({ toPlainOnly: true })
  tgl_kembali: string

  @Column({ type: 'varchar', name: 'bast', nullable: true, default: null })
  // @Expose({ toPlainOnly: true })
  bast: string

  @Column({ type: 'smallint', name: 'status_peminjaman', nullable: true, default: 1 })
  // @Expose({ toPlainOnly: true })
  status_peminjaman: number


}