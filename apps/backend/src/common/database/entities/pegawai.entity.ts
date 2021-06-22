import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, PrimaryColumn, ObjectID, ObjectIdColumn } from 'typeorm';
import { Expose } from 'class-transformer';
// import { UnitKerja } from './unit-kerja.entity';

@Entity({ name: 'pegawai' })
export class Pegawai {

  // @Expose()
  // @ObjectIdColumn({ name: '_id' })
  // _id: ObjectID

  @Expose()
  @PrimaryColumn({ name: 'peg_id' })
  peg_id: string
  @Expose()
  @Column({ type: 'text', name: 'peg_nip', nullable: true, default: null })
  peg_nip: string
  @Expose()
  @Column({ type: 'text', name: 'last_update', nullable: true, default: null })
  last_update: string
  @Expose()
  @Column({ type: 'text', name: 'peg_nip_lama', nullable: true, default: null })
  peg_nip_lama: string
  @Expose()
  @Column({ type: 'text', name: 'peg_nama', nullable: true, default: null })
  peg_nama: string
  @Expose()
  @Column({ type: 'text', name: 'peg_nama_lengkap', nullable: true, default: null })
  peg_nama_lengkap: string
  @Expose()
  @Column({ type: 'text', name: 'peg_lahir_tanggal', nullable: true, default: null })
  peg_lahir_tanggal: string
  @Expose()
  @Column({ name: 'peg_usia', nullable: true, default: null })
  peg_usia: number
  @Expose()
  @Column({ type: 'text', name: 'peg_jenis_kelamin', nullable: true, default: null })
  peg_jenis_kelamin: string
  @Expose()
  @Column({ type: 'text', name: 'peg_rumah_alamat', nullable: true, default: null })
  peg_rumah_alamat: string
  @Expose()
  @Column({ type: 'text', name: 'peg_kodepos', nullable: true, default: null })
  peg_kodepos: string
  @Expose()
  @Column({ type: 'text', name: 'peg_lahir_tempat', nullable: true, default: null })
  peg_lahir_tempat: string
  @Expose()
  @Column({ type: 'text', name: 'peg_foto_url', nullable: true, default: null })
  peg_foto_url: string
  @Expose()
  @Column({ type: 'text', name: 'peg_status', nullable: true, default: null })
  peg_status: boolean
  @Expose()
  @Column({ type: 'text', name: 'peg_ketstatus', nullable: true, default: null })
  peg_ketstatus: string
  @Expose()
  @Column({ type: 'text', name: 'peg_ktp', nullable: true, default: null })
  peg_ktp: string
  @Expose()
  @Column({ name: 'peg_umur_pensiun', nullable: true, default: null })
  peg_umur_pensiun: number
  @Expose()
  @Column({ type: 'text', name: 'peg_jabatan_tmt', nullable: true, default: null })
  peg_jabatan_tmt: string
  @Expose()
  @Column({ type: 'text', name: 'peg_eselon_tmt', nullable: true, default: null })
  peg_eselon_tmt: string
  @Expose()
  @Column({ type: 'text', name: 'peg_skpd_tmt', nullable: true, default: null })
  peg_skpd_tmt: string
  @Expose()
  @Column({ type: 'text', name: 'peg_npwp', nullable: true, default: null })
  peg_npwp: string
  @Expose()
  @Column({ type: 'text', name: 'peg_telp', nullable: true, default: null })
  peg_telp: string
  @Expose()
  @Column({ type: 'text', name: 'peg_telp_hp', nullable: true, default: null })
  peg_telp_hp: string
  @Expose()
  @Column({ name: 'id_agama', nullable: true, default: null })
  id_agama: number
  @Expose()
  @Column({ type: 'text', name: 'nm_agama', nullable: true, default: null })
  nm_agama: string
  @Expose()
  @Column({ name: 'jabatan_id', nullable: true, default: null })
  jabatan_id: number
  @Expose()
  @Column({ name: 'jf_id', nullable: true, default: null })
  jf_id: number
  @Expose()
  @Column({ name: 'jfu_id', nullable: true, default: null })
  jfu_id: number
  @Expose()
  @Column({ name: 'jabatan_jenis', nullable: true, default: null })
  jabatan_jenis: number
  @Expose()
  @Column({ type: 'text', name: 'jabatan_nama', nullable: true, default: null })
  jabatan_nama: string
  @Expose()
  @Column({ name: 'eselon_id', nullable: true, default: null })
  eselon_id: number
  @Expose()
  @Column({ type: 'text', name: 'eselon_nm', nullable: true, default: null })
  eselon_nm: string
  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_id', nullable: true, default: null })
  unit_kerja_id: string
  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_nama', nullable: true, default: null })
  unit_kerja_nama: string
  @Expose()
  @Column({ type: 'text', name: 'satuan_kerja_id', nullable: true, default: null })
  satuan_kerja_id: string
  @Expose()
  @Column({ type: 'text', name: 'satuan_kerja_nama', nullable: true, default: null })
  satuan_kerja_nama: string
  @Expose()
  @Column({ name: 'gol_id_awal', nullable: true, default: null })
  gol_id_awal: number
  @Expose()
  @Column({ type: 'text', name: 'nm_gol_awal', nullable: true, default: null })
  nm_gol_awal: string
  @Expose()
  @Column({ type: 'text', name: 'nm_pkt_awal', nullable: true, default: null })
  nm_pkt_awal: string
  @Expose()
  @Column({ name: 'gol_id_akhir', nullable: true, default: null })
  gol_id_akhir: number
  @Expose()
  @Column({ type: 'text', name: 'nm_gol_akhir', nullable: true, default: null })
  nm_gol_akhir: string
  @Expose()
  @Column({ type: 'text', name: 'nm_pkt_akhir', nullable: true, default: null })
  nm_pkt_akhir: string
  @Expose()
  @Column({ name: 'id_pend_awal', nullable: true, default: null })
  id_pend_awal: number
  @Expose()
  @Column({ type: 'text', name: 'nm_pend_awal', nullable: true, default: null })
  nm_pend_awal: string
  @Expose()
  @Column({ type: 'text', name: 'kat_nama_pend_awal', nullable: true, default: null })
  kat_nama_pend_awal: string
  @Expose()
  @Column({ type: 'text', name: 'nm_tingpend_awal', nullable: true, default: null })
  nm_tingpend_awal: string
  @Expose()
  @Column({ name: 'id_pend_akhir', nullable: true, default: null })
  id_pend_akhir: number
  @Expose()
  @Column({ type: 'text', name: 'nm_pend_akhir', nullable: true, default: null })
  nm_pend_akhir: string
  @Expose()
  @Column({ type: 'text', name: 'kat_nama_pend_akhir', nullable: true, default: null })
  kat_nama_pend_akhir: string
  @Expose()
  @Column({ type: 'text', name: 'nm_tingpend_akhir', nullable: true, default: null })
  nm_tingpend_akhir: string
  @Expose()
  @Column({ type: 'text', name: 'riwayat_pendidikan', nullable: true, default: null })
  riwayat_pendidikan: string
  @Expose()
  @Column({ type: 'text', name: 'riwayat_jabatan', nullable: true, default: null })
  riwayat_jabatan: string
  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_parent_nama', nullable: true, default: null })
  unit_kerja_parent_nama: string
  @Expose()
  @Column({ type: 'text', name: 'kedudukan_pegawai', nullable: true, default: null })
  kedudukan_pegawai: string
  @Expose()
  @Column({ type: 'text', name: 'kedudukan_pns', nullable: true, default: null })
  kedudukan_pns: string
  @Expose()
  @Column({ type: 'text', name: 'kode_jabatan', nullable: true, default: null })
  kode_jabatan: string
  @Expose()
  @Column({ type: 'text', name: 'peg_tmt_pensiun', nullable: true, default: null })
  peg_tmt_pensiun: string
  @Expose()
  @Column({ name: 'masa_kerja_tahun', nullable: true, default: null })
  masa_kerja_tahun: number
  @Expose()
  @Column({ name: 'masa_kerja_bulan', nullable: true, default: null })
  masa_kerja_bulan: number
  @Expose()
  @Column({ name: 'masa_kerja_golongan_tahun', nullable: true, default: null })
  masa_kerja_golongan_tahun: number
  @Expose()
  @Column({ name: 'masa_kerja_golongan_bulan', nullable: true, default: null })
  masa_kerja_golongan_bulan: number
  @Expose()
  @Column({ name: 'peg_status_kepegawaian_id', nullable: true, default: null })
  peg_status_kepegawaian_id: number

  @Expose()
  @Column({ type: 'text', name: 'peg_status_kepegawaian', nullable: true, default: null })
  peg_status_kepegawaian: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan_jabatan_id', nullable: true, default: null })
  tugas_tambahan_jabatan_id: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan_jenis', nullable: true, default: null })
  tugas_tambahan_jenis: string

  @Expose()
  @Column({ type: 'text', name: 'daftar_spesialisasi', nullable: true, default: null })
  daftar_spesialisasi: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan_jabatan_nama', nullable: true, default: null })
  tugas_tambahan_jabatan_nama: string

  @Expose()
  @Column({ type: 'text', name: 'tmt_tugas_tambahan', nullable: true, default: null })
  tmt_tugas_tambahan: string

  @Expose()
  @Column({ type: 'text', name: 'peg_instansi_dpk', nullable: true, default: null })
  peg_instansi_dpk: string

  @Expose()
  @Column({ type: 'text', name: 'daftar_spesialisasi_nama', nullable: true, default: null })
  daftar_spesialisasi_nama: string

  @Expose()
  @Column({ type: 'text', name: 'peg_jenis_pns', nullable: true, default: null })
  peg_jenis_pns: string

  @Expose()
  @Column({ type: 'text', name: 'jf_nama', nullable: true, default: null })
  jf_nama: string

  @Expose()
  @Column({ type: 'text', name: 'jfu_nama', nullable: true, default: null })
  jfu_nama: string

  @Expose()
  @Column({ type: 'text', name: 'peg_gol_akhir_tmt', nullable: true, default: null })
  peg_gol_akhir_tmt: string

  @Expose()
  @Column({ type: 'text', name: 'peg_ketstatus_tgl', nullable: true, default: null })
  peg_ketstatus_tgl: string

  @Expose()
  @Column({ type: 'text', name: 'peg_cpns_tmt', nullable: true, default: null })
  peg_cpns_tmt: string

  @Expose()
  @Column({ type: 'text', name: 'peg_pns_tmt', nullable: true, default: null })
  peg_pns_tmt: string

  @Expose()
  @Column({ type: 'text', name: 'nuptk', nullable: true, default: null })
  nuptk: string

  @Expose()
  @Column({ type: 'text', name: 'id_goldar', nullable: true, default: null })
  id_goldar: string

  @Expose()
  @Column({ type: 'text', name: 'nm_goldar', nullable: true, default: null })
  nm_goldar: string

  @Expose()
  @Column({ type: 'text', name: 'peg_email', nullable: true, default: null })
  peg_email: string

  @Expose()
  @Column({ type: 'text', name: 'peg_bapertarum', nullable: true, default: null })
  peg_bapertarum: string

  @Expose()
  @Column({ type: 'text', name: 'peg_no_askes', nullable: true, default: null })
  peg_no_askes: string

  @Expose()
  @Column({ type: 'text', name: 'id_status_kepegawaian', nullable: true, default: null })
  id_status_kepegawaian: string

  @Expose()
  @Column({ type: 'text', name: 'peg_status_perkawinan', nullable: true, default: null })
  peg_status_perkawinan: string

  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_level', nullable: true, default: null })
  unit_kerja_level: string

  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_parent', nullable: true, default: null })
  unit_kerja_parent: string

  @Expose()
  @Column({ type: 'text', name: 'peg_kel_desa', nullable: true, default: null })
  peg_kel_desa: string

  @Expose()
  @Column({ type: 'text', name: 'kecamatan_nm', nullable: true, default: null })
  kecamatan_nm: string

  @Expose()
  @Column({ type: 'text', name: 'jabatan_kelas', nullable: true, default: null })
  jabatan_kelas: string

  @Expose()
  @Column({ type: 'text', name: 'peg_karpeg', nullable: true, default: null })
  peg_karpeg: string

  @Expose()
  @Column({ type: 'text', name: 'peg_pend_akhir_th', nullable: true, default: null })
  peg_pend_akhir_th: string

  @Expose()
  @Column({ type: 'text', name: 'peg_nama_jenis_pns', nullable: true, default: null })
  peg_nama_jenis_pns: string

  @Expose()
  @Column({ type: 'text', name: 'peg_jft_tmt', nullable: true, default: null })
  peg_jft_tmt: string

  @Expose()
  @Column({ name: 'id_kota', nullable: true, default: null })
  id_kota: number

  @Expose()
  @Column({ name: 'id_kec', nullable: true, default: null })
  id_kec: number

  @Expose()
  @Column({ type: "bigint", name: 'id_kel', nullable: true, default: null })
  id_kel: number

  @Expose()
  @Column({ name: 'id_provinsi', nullable: true, default: null })
  id_provinsi: number

  @Expose()
  @Column({ type: 'text', name: 'nama_kel', nullable: true, default: null })
  nama_kel: string

  @Expose()
  @Column({ type: 'text', name: 'nama_kec', nullable: true, default: null })
  nama_kec: string

  @Expose()
  @Column({ type: 'text', name: 'nama_kota', nullable: true, default: null })
  nama_kota: string

  @Expose()
  @Column({ type: 'text', name: 'nama_provinsi', nullable: true, default: null })
  nama_provinsi: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan2_jabatan_id', nullable: true, default: null })
  tugas_tambahan2_jabatan_id: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan2_jenis', nullable: true, default: null })
  tugas_tambahan2_jenis: string

  @Expose()
  @Column({ type: 'text', name: 'tugas_tambahan2_jabatan_nama', nullable: true, default: null })
  tugas_tambahan2_jabatan_nama: string

  @Expose()
  @Column({ type: 'text', name: 'tmt_tugas_tambahan2', nullable: true, default: null })
  tmt_tugas_tambahan2: string

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_latitude', nullable: true, default: null })
  peg_alamat_latitude: string

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_longitude', nullable: true, default: null })
  peg_alamat_longitude: string

  @Expose()
  @Column({ type: 'text', name: 'is_gtk', nullable: true, default: null })
  is_gtk: boolean

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_rt', nullable: true, default: null })
  peg_alamat_rt: string

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_rw', nullable: true, default: null })
  peg_alamat_rw: string

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_rt_ktp', nullable: true, default: null })
  peg_alamat_rt_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'peg_alamat_rw_ktp', nullable: true, default: null })
  peg_alamat_rw_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'peg_rumah_alamat_ktp', nullable: true, default: null })
  peg_rumah_alamat_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'peg_kodepos_ktp', nullable: true, default: null })
  peg_kodepos_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'nama_kel_ktp', nullable: true, default: null })
  nama_kel_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'nama_kec_ktp', nullable: true, default: null })
  nama_kec_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'nama_kota_ktp', nullable: true, default: null })
  nama_kota_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'nama_provinsi_ktp', nullable: true, default: null })
  nama_provinsi_ktp: string

  @Expose()
  @Column({ type: 'text', name: 'nip_atasan', nullable: true, default: null })
  nip_atasan: string
  @Expose()
  @Column({ type: 'text', name: 'nama_atasan', nullable: true, default: null })
  nama_atasan: string
  @Expose()
  @Column({ type: 'text', name: 'nip_atasan_bayangan', nullable: true, default: null })
  nip_atasan_bayangan: string
  @Expose()
  @Column({ type: 'text', name: 'nama_atasan_bayangan', nullable: true, default: null })
  nama_atasan_bayangan: string

  @Expose()
  @Column({ type: 'text', name: 'peg_kgb_yad_akhir', nullable: true, default: null })
  peg_kgb_yad_akhir: string

  @Expose()
  @Column({ type: 'text', name: 'unit_kerja_nama_full', nullable: true, default: null })
  unit_kerja_nama_full: string

  @Expose()
  @Column({ type: 'text', name: 'organisasi_nama_alias', nullable: true, default: null })
  organisasi_nama_alias: string

  @Expose()
  @Column({ type: 'text', name: 'organisasi_id', nullable: true, default: null })
  organisasi_id: string

  @Expose()
  @Column({ type: 'text', name: 'peg_no_rekening', nullable: true, default: null })
  peg_no_rekening: string

  @Expose()
  @Column({ type: 'text', name: 'peg_masa_kerja_golongan', nullable: true, default: null })
  peg_masa_kerja_golongan: string

  @Expose()
  @Column({ name: 'peg_jumlah_anak', nullable: true, default: null })
  peg_jumlah_anak: number

  @Expose()
  @Column({ name: 'peg_jumlah_anak_tunjangan', nullable: true, default: null })
  peg_jumlah_anak_tunjangan: number

  @Expose()
  @Column({ name: 'peg_jumlah_pasangan_tunjangan', nullable: true, default: null })
  peg_jumlah_pasangan_tunjangan: number

  @Expose()
  @Column({ type: 'text', name: 'peg_email_resmi', nullable: true, default: null })
  peg_email_resmi: string

  @Expose()
  @Column({ type: 'text', name: 'tanggal_lahir_origin', nullable: true, default: null })
  tanggal_lahir_origin: string

  @Expose()
  @Column({ type: 'text', name: 'tanggal_cpns_origin', nullable: true, default: null })
  tanggal_cpns_origin: string

  @Expose()
  @Column({ type: 'text', name: 'tanggal_pns_origin', nullable: true, default: null })
  tanggal_pns_origin: string

  @Expose()
  @Column({ type: 'text', name: 'tmt_golongan_akhir_origin', nullable: true, default: null })
  tmt_golongan_akhir_origin: string

  @Expose()
  @Column({ type: 'text', name: 'foto_pegawai_environment', nullable: true, default: null })
  foto_pegawai_environment: string

  @Expose()
  @Column({ name: 'golongan_pensiun', nullable: true, default: null })
  golongan_pensiun: number

  @Expose()
  @Column({ name: 'umur', nullable: true, default: null })
  umur: number

  @Expose()
  @Column({ type: 'text', name: 'perhitungan_masa_kerja', nullable: true, default: null })
  perhitungan_masa_kerja: string

  @Expose()
  @Column({ type: 'text', name: 'last_update_local', nullable: true, default: null })
  last_update_local: string

  // @JoinColumn({ name: 'unit_kerja_id' })
  // @ManyToOne(() => UnitKerja, UnitKerja => UnitKerja.siap_id)
  // unit_kerja: UnitKerja

  // @Column({ name: 'unit_kerja_id' })
  // unitKerjaId: string

  // @Column({ name: 'nama_atasan_bayangan' })
  // atasanBayanganNama: string

  // @ManyToOne(() => Jabatan, jabatan => jabatan.id)
  // @JoinColumn({ name: 'parent' })
  // parent: Jabatan

  // @OneToMany(() => Jabatan, jabatan => jabatan.parent)
  // @JoinColumn({ name: 'id' })
  // child: Jabatan[]


  // @ManyToOne(() => UnitKerja, unitKerja => unitKerja.id)
  // @JoinColumn({ name: 'parent_maps' })
  // parentMap: UnitKerja

  // @OneToMany(() => UnitKerja, unitKerja => unitKerja.parentMap)
  // @JoinColumn({ name: 'id' })
  // childMap: UnitKerja[]

}