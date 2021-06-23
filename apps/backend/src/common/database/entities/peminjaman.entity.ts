import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'tr_peminjaman' })
export class Peminjaman {

  @PrimaryGeneratedColumn({ name: 'id' })
  // @Expose({ toPlainOnly: true })
  id: string

  @Column({ type: 'varchar', name: 'peg_nip' })
  // @Expose({ toPlainOnly: true })
  peg_nip: string

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

  @Column({ type: 'varchar', name: 'tipe_barang' })
  // @Expose({ toPlainOnly: true })
  tipe_barang: string

  @Column({ type: 'varchar', name: 'tipe_barang' })
  // @Expose({ toPlainOnly: true })
  maksud: string

  @Column({ type: 'varchar', name: 'supir' })
  // @Expose({ toPlainOnly: true })
  supir: string

  @Column({ type: 'date', name: 'tgl_pinjam' })
  // @Expose({ toPlainOnly: true })
  tgl_pinjam: string

  @Column({ type: 'date', name: 'tgl_kembali' })
  // @Expose({ toPlainOnly: true })
  tgl_kembali: string

  @Column({ type: 'smallint', name: 'status_pinjam' })
  // @Expose({ toPlainOnly: true })
  status_pinjam: string

  @Column({ type: 'varchar', name: 'bast', nullable: true, default: null })
  // @Expose({ toPlainOnly: true })
  bast: string


}