import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'user' })
// @Tree("closure-table")
// @Tree("materialized-path")
// @Tree("nested-set")
export class User {

  // @ObjectIdColumn({ name: '_id' })
  // // @Expose({ toPlainOnly: true })
  // _id: ObjectID

  @PrimaryColumn({ type: 'varchar', name: 'id' })
  // @Expose({ toPlainOnly: true })
  id: string

  @Column({ type: 'varchar', name: 'nip' })
  // @Expose({ toPlainOnly: true })
  nip: string

  @Column({ type: 'varchar', name: 'nama' })
  // @Expose({ toPlainOnly: true })
  nama: string

  @Column({ type: 'varchar', name: 'golongan' })
  // @Expose({ toPlainOnly: true })
  golongan: string

  @Column({ type: 'varchar', name: 'unit_kerja' })
  // @Expose({ toPlainOnly: true })
  unit_kerja: string

  @Column({ type: 'varchar', name: 'jabatan' })
  // @Expose({ toPlainOnly: true })
  jabatan: string

  @Column({ type: 'varchar', name: 'pangkat' })
  // @Expose({ toPlainOnly: true })
  pangkat: string

  @Column({ type: 'text', name: 'token_siap', default: null })
  // @Expose({ toPlainOnly: true })
  token_siap: string

  @Column({ type: 'text', name: 'token_fcm', default: null })
  // @Expose({ toPlainOnly: true })
  token_fcm: string

  @Column({ type: 'varchar', name: 'role', default: null })
  // @Expose({ toPlainOnly: true })
  role: string

  // @Column({ type: 'text', name: 'role', default: null })
  // // @Expose({ toPlainOnly: true })
  // role: string

  // @JoinColumn({ name: 'parent_id' })
  // @ManyToOne(() => UnitKerja, unitKerja => unitKerja.id)
  // parent: UnitKerja

  // @JoinColumn({ name: 'parent_id' })
  // @ManyToOne(() => UnitKerja, unitKerja => unitKerja.id)
  // parent: UnitKerja

  // @JoinColumn({ name: 'id' })
  // @OneToMany(() => UnitKerja, unitKerja => unitKerja.parent)
  // child: UnitKerja[]

  // @TreeChildren()
  // children: Jabatan[];

  // @TreeParent()
  // parent: Jabatan;


  // @TreeChildren()
  // // @JoinColumn({ name: 'id' })
  // child: Jabatan[]

  // @TreeParent()
  // // @JoinColumn({ name: 'parent' })
  // parent: Jabatan

}