import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'tm_kib_e' })
export class KibE {

  @PrimaryColumn({ type: 'varchar', name: 'kode_barang' })
  // @Expose({ toPlainOnly: true })
  kode_barang: string

  @Column({ type: 'varchar', name: 'nama_barang' })
  // @Expose({ toPlainOnly: true })
  nama_barang: string

  @Column({ type: 'varchar', name: 'jenis_barang', nullable: true, default: null })
  // @Expose({ toPlainOnly: true })
  jenis_barang: string

  // @Column({ type: 'varchar', name: 'golongan' })
  // // @Expose({ toPlainOnly: true })
  // golongan: string


}