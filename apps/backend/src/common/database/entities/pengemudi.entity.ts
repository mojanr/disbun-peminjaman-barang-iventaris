import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'tm_pengemudi' })
// @Tree("closure-table")
// @Tree("materialized-path")
// @Tree("nested-set")
export class Pengemudi {

  // @ObjectIdColumn({ name: '_id' })
  // // @Expose({ toPlainOnly: true })
  // _id: ObjectID

  @PrimaryColumn({ type: 'varchar', name: 'ktp' })
  // @Expose({ toPlainOnly: true })
  ktp: string

  @Column({ type: 'varchar', name: 'nama' })
  // @Expose({ toPlainOnly: true })
  nama: string

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