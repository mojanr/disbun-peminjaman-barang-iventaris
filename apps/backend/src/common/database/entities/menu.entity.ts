import { Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, Tree, TreeChildren, TreeParent, PrimaryColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity({ name: 'tm_menu' })
export class User {

  // @Expose({ toPlainOnly: true })
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'name' })
  name: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'path' })
  path: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'title' })
  title: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'icon', nullable: true, default: null })
  icon: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'varchar', name: 'parent' })
  parent: string

  // @Expose({ toPlainOnly: true })
  @Column({ type: 'boolean', name: 'status', default: true })
  status: boolean


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