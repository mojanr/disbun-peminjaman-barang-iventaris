import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'tm_barang' })
export class Barang {

  // @Expose({ toPlainOnly: true })
  @PrimaryColumn({ type: 'varchar', name: 'kode_barang' })
  kode_barang: string

  // @Expose({ toPlainOnly: true })
  // tipe kib a/b/c/d contoh penulisan KIB-A
  @Column({ type: 'varchar', name: 'tipe_asset', nullable: true, default: null })
  tipe_asset: string

  // @Expose({ toPlainOnly: true })
  // tipe barang, kendaraan atau lain lain
  @Column({ type: 'varchar', name: 'tipe_barang', nullable: true, default: null })
  tipe_barang: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'nama_barang' })
  nama_barang: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'jenis_barang', nullable: true, default: null })
  jenis_barang: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'merk', nullable: true, default: null })
  merk: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'no_polisi', nullable: true, default: null })
  no_polisi: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'alamat', nullable: true, default: null })
  alamat: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'luas', nullable: true, default: null })
  luas: string

  // // @Expose({ toPlainOnly: true })
  // @Column({ type: 'varchar', name: 'golongan' })
  // golongan: string


}