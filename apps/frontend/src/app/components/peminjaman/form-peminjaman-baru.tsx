import React, { Fragment, memo } from 'react'
import { Select, Space, Button, Typography, Form, Spin, Input, Row, Col, DatePicker, Empty } from 'antd'
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useRequest } from 'ahooks';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormItemComponent } from '../common'
import { AuthApi } from '../../api/auth.api';
import { Api } from '../../api/api';
import { RequestQueryBuilder } from "@nestjsx/crud-request";

const { Option } = Select;
const { RangePicker } = DatePicker

const sampleData = [{ "peg_id": "196307121997031004", "peg_nip": "196307121997031004", "peg_nama": "R HERY DAMANA", "peg_nama_lengkap": "Ir. R HERY DAMANA", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/Heri_Damana1.jpeg", "jabatan_nama": "KEPALA SEKSI SERTIFIKASI BENIH" }, { "peg_id": "197106282008011002", "peg_nip": "197106282008011002", "peg_nama": "SYAIFUL AHMAD", "peg_nama_lengkap": "SYAIFUL AHMAD, S.T.P.,MP", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/19710628_200801_1002.jpg", "jabatan_nama": "PENGAWAS MUTU HASIL PERTANIAN AHLI MUDA" }, { "peg_id": "197212142005011004", "peg_nip": "197212142005011004", "peg_nama": "R. KRISNA GUNARA", "peg_nama_lengkap": "R. KRISNA GUNARA, S.Hut., M.Eng.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/KRISNA_GUNARA.jpeg", "jabatan_nama": "KEPALA UPTD BALAI PENGAWASAN DAN SERTIFIKASI BENIH PERKEBUNAN" }, { "peg_id": "197303302007011006", "peg_nip": "197303302007011006", "peg_nama": "FARID MULYANA", "peg_nama_lengkap": "FARID MULYANA, A.Md.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/foto-197303302007011006.jpg", "jabatan_nama": "VERIFIKATOR KEUANGAN" }, { "peg_id": "197412022000031001", "peg_nip": "197412022000031001", "peg_nama": "FAJAR ABDILLAH", "peg_nama_lengkap": "H.FAJAR ABDILLAH, S.Hut., M.A.P.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/197412022000031001.jpeg", "jabatan_nama": "KEPALA BIDANG PENGOLAHAN, PEMASARAN, DAN USAHA PERKEBUNAN" }, { "peg_id": "197510142010011001", "peg_nip": "197510142010011001", "peg_nama": "AHMAD FATONI", "peg_nama_lengkap": "AHMAD FATONI, SP", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/197510142010011001.jpg", "jabatan_nama": "ANALIS PERENCANAAN, EVALUASI DAN PELAPORAN" }, { "peg_id": "198104132010012002", "peg_nip": "198104132010012002", "peg_nama": "ROSYANI", "peg_nama_lengkap": "ROSYANI, A.Md.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/198104132010012002.jpeg", "jabatan_nama": "VERIFIKATOR KEUANGAN" }, { "peg_id": "198603172020121008", "peg_nip": "198603172020121008", "peg_nama": "IRFAN HIDAYAT", "peg_nama_lengkap": "IRFAN HIDAYAT, S.E.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/198603172020121008.jpg", "jabatan_nama": "ANALIS PEMASARAN DAN KERJASAMA" }, { "peg_id": "198901102020122007", "peg_nip": "198901102020122007", "peg_nama": "FIKA ASTRIANA", "peg_nama_lengkap": "FIKA ASTRIANA, S.P.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/198901102020122007.jpg", "jabatan_nama": "PENGENDALI ORGANISME PENGGANGGU TUMBUHAN AHLI PERTAMA" }, { "peg_id": "198905282020121012", "peg_nip": "198905282020121012", "peg_nama": "FIRDIAN ILHAM SYAH", "peg_nama_lengkap": "FIRDIAN ILHAM SYAH, S.Si.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/198905282020121012.png", "jabatan_nama": "STATISTISI AHLI PERTAMA" }, { "peg_id": "198907032020121007", "peg_nip": "198907032020121007", "peg_nama": "FAJRI JULRIANO", "peg_nama_lengkap": "FAJRI JULRIANO, S. I. Kom", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/198907032020121007.jpg", "jabatan_nama": "PRANATA HUBUNGAN MASYARAKAT AHLI PERTAMA" }, { "peg_id": "199005052015031009", "peg_nip": "199005052015031009", "peg_nama": "ADI FIRMANSYAH", "peg_nama_lengkap": "ADI FIRMANSYAH, S.P.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199005052015031009.jpg", "jabatan_nama": "ANALIS PENINGKATAN USAHA PERTANIAN DAN AGROBISNIS" }, { "peg_id": "199408012020121016", "peg_nip": "199408012020121016", "peg_nama": "KHADAMULLAH MAULA LATIEF NURHUDA", "peg_nama_lengkap": "KHADAMULLAH MAULA LATIEF NURHUDA, S.P.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199408012020121016.jpg", "jabatan_nama": "PENGENDALI ORGANISME PENGGANGGU TUMBUHAN AHLI PERTAMA" }, { "peg_id": "199408132020121010", "peg_nip": "199408132020121010", "peg_nama": "GHIYATS NUR SYAFIQ ABDUL QADIR", "peg_nama_lengkap": "GHIYATS NUR SYAFIQ ABDUL QADIR, S.T.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199408132020121010.jpg", "jabatan_nama": "ANALIS PENGAWASAN MUTU PRODUK" }, { "peg_id": "199502052020121005", "peg_nip": "199502052020121005", "peg_nama": "FIRMAN RAMADAN", "peg_nama_lengkap": "FIRMAN RAMADAN, A.Md. Akun.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199502052020121005.jpg", "jabatan_nama": "PENGOLAH DATA APLIKASI DAN PENGELOLAAN DATA SISTEM KEUANGAN" }, { "peg_id": "199504132020122026", "peg_nip": "199504132020122026", "peg_nama": "ULFA RAFIDATILLAH", "peg_nama_lengkap": "ULFA RAFIDATILLAH, SP", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199504132020122026.jpg", "jabatan_nama": "PENGENDALI ORGANISME PENGGANGGU TUMBUHAN AHLI PERTAMA" }, { "peg_id": "199505162020121012", "peg_nip": "199505162020121012", "peg_nama": "PANDU ALIF LUKMAN ROESNO", "peg_nama_lengkap": "PANDU ALIF LUKMAN ROESNO, A.Md.Kom", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199505162020121012.jpg", "jabatan_nama": "PRANATA HUBUNGAN MASYARAKAT TERAMPIL" }, { "peg_id": "199509012020121007", "peg_nip": "199509012020121007", "peg_nama": "MOCHAMMAD FAUZAN RIZQULLOH", "peg_nama_lengkap": "MOCHAMMAD FAUZAN RIZQULLOH, S.Kom.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199509012020121007.jpg", "jabatan_nama": "PRANATA KOMPUTER AHLI PERTAMA" }, { "peg_id": "199512272020122015", "peg_nip": "199512272020122015", "peg_nama": "ZANIRA RISTIAFATY UTAMI", "peg_nama_lengkap": "ZANIRA RISTIAFATY UTAMI, SST.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199512272020122015.jpg", "jabatan_nama": "ANALIS PENGEMBANGAN SARANA DAN PRASARANA" }, { "peg_id": "199606042020122019", "peg_nip": "199606042020122019", "peg_nama": "FITRIANTI WIDYA LESTARI", "peg_nama_lengkap": "FITRIANTI WIDYA LESTARI, S.P", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199606042020122019.jpg", "jabatan_nama": "PENGAWAS BENIH TANAMAN AHLI PERTAMA" }, { "peg_id": "199704012020122016", "peg_nip": "199704012020122016", "peg_nama": "RISDA APRILIA HAFSARI", "peg_nama_lengkap": "RISDA APRILIA HAFSARI, A.Md.I.Kom.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199704012020122016.jpg", "jabatan_nama": "PRANATA HUBUNGAN MASYARAKAT TERAMPIL" }, { "peg_id": "199704122020121008", "peg_nip": "199704122020121008", "peg_nama": "DIMAS FAUZAN MAHASATYA AMARA", "peg_nama_lengkap": "DIMAS FAUZAN MAHASATYA AMARA, S.P.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199704122020121008.jpg", "jabatan_nama": "PENGENDALI ORGANISME PENGGANGGU TUMBUHAN AHLI PERTAMA" }, { "peg_id": "199705132020122013", "peg_nip": "199705132020122013", "peg_nama": "MARSYA HAIFATUNISA KARIMAH", "peg_nama_lengkap": "MARSYA HAIFATUNISA KARIMAH, S.T", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199705132020122013.png", "jabatan_nama": "PENELAAH DATA SUMBER BENIH" }, { "peg_id": "199711092020121006", "peg_nip": "199711092020121006", "peg_nama": "LEORIZKY FAJAR PRATAMA", "peg_nama_lengkap": "LEORIZKY FAJAR PRATAMA, A.Md.", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199711092020121006.jpg", "jabatan_nama": "PENGELOLA TEKNOLOGI PERBENIHAN" }, { "peg_id": "199806272020121002", "peg_nip": "199806272020121002", "peg_nama": "YUSRIL ADINOFAL", "peg_nama_lengkap": "YUSRIL ADINOFAL, A.Md.Stat", "peg_foto_url": "https://siap.jabarprov.go.id/uploads/199806272020121002.jpg", "jabatan_nama": "STATISTISI TERAMPIL" }]

// form peminjaman baru schema
const FormLoginSchema = yup.object().shape({
  peminjam: yup.string().required(),
  password: yup.string().required()
})


const FormPeminjamanBaru = () => {

  const modalPeminjamanBaru = useModalPeminjamanBaru()

  const closeModalPeminjamanBaru = () => modalPeminjamanBaru.close()

  const reqPegawaiSearch = useRequest(Api.PegawaiApi.search, {
    manual: true,
    throwOnError: true,
  })

  const reqBarangSearch = useRequest(Api.BarangApi.search, {
    manual: true,
    throwOnError: true,
  })

  const reqSubmitPeminjaman = useRequest('test', {
    manual: true,
    throwOnError: true,
  })

  // form
  const { handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
    // resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })
  // watch field
  const fieldWatchBarang = watch('barang')


  // on search field pegawai select
  const onSearchFieldPegawai = async (value: any) => {
    try {
      const queryString = RequestQueryBuilder.create({
        fields: ["peg_id", "peg_nip", "peg_nama", "peg_nama_lengkap", "jabatan_nama", "peg_foto_url"],
        or: [
          {
            field: 'peg_id',
            operator: '$cont',
            value: value
          },
          {
            field: 'peg_nama',
            operator: '$cont',
            value: value
          },
          {
            field: 'peg_nama_lengkap',
            operator: '$cont',
            value: value
          },
          {
            field: 'jabatan_nama',
            operator: '$cont',
            value: value
          }
        ]
        // join: [{ field: "company" }],
        // sort: [{ field: "id", order: "DESC" }],
        // page: 1,
        // limit: 25,
        // resetCache: true
        // filter: ;
      }).query();


      await reqPegawaiSearch.run(queryString)
    } catch (error) {
      console.log(error)
    }
  }

  // on search field barang select
  const onSearchFieldBarang = async (value: any) => {
    try {
      const queryString = RequestQueryBuilder.create({
        // fields: ["peg_id", "peg_nip", "peg_nama", "peg_nama_lengkap", "jabatan_nama", "peg_foto_url"],
        or: [
          {
            field: 'kode_barang',
            operator: '$cont',
            value: value
          },
          {
            field: 'nama_barang',
            operator: '$cont',
            value: value
          },
          {
            field: 'jenis_barang',
            operator: '$cont',
            value: value
          },
          {
            field: 'merk',
            operator: '$cont',
            value: value
          },
          {
            field: 'no_polisi',
            operator: '$cont',
            value: value
          }
        ]
        // join: [{ field: "company" }],
        // sort: [{ field: "id", order: "DESC" }],
        // page: 1,
        // limit: 25,
        // resetCache: true
        // filter: ;
      }).query();


      await reqBarangSearch.run(queryString)
    } catch (error) {
      console.log(error)
    }
  }

  // form submit
  const onSubmit = async (formData: any) => {
    console.log(formData)
    // try {

    //   // await reqSubmitPeminjaman.run(formData.username, formData.password)
    //   // history.push('/dashboard')
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const onBarangChange = (value: any) => setValue('barang', value)
  const onTglPinjamChange = (date: any, dateString: string[]) => {
    // console.log(dateString)
    setValue('tgl_penggunaan', [...dateString])
  }

  return (
    <Fragment>

      <Form
        name="form_peminjaman_baru"
        className="form-peminjaman-baru"
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        layout="horizontal"
        labelCol={{ span: 6 }}
        onSubmitCapture={handleSubmit(onSubmit)}
      >
        <FormItemComponent
          label="Peminjam"
          name="peminjam"
          isRequired
          errors={errors}
        >
          <Controller
            name="peminjam"
            control={control}
            render={({ field }) =>
              <Select
                showSearch
                filterOption={false}
                placeholder="Pilih peminjam"
                onSearch={onSearchFieldPegawai}
                options={reqPegawaiSearch.data?.data?.message.map((item: any, index: any) => ({
                  label: (
                    <Fragment>
                      <Typography.Text strong> {item.peg_nama_lengkap} </Typography.Text>
                      <br></br>
                      <Typography.Text> {item.peg_nip} </Typography.Text>
                      <br></br>
                      <Typography.Text> {item.jabatan_nama} </Typography.Text>
                    </Fragment>
                  ),
                  value: item.peg_nip,
                  key: item.peg_nip
                }))}
                notFoundContent={reqPegawaiSearch.loading ? <Spin size="small" /> : null}
                {...field}
              />
            }
          />
        </FormItemComponent>

        {/* barang */}
        {/* <FormItemComponent
          label="Barang"
          name="barang"
          isRequired
          errors={errors}
        >
          <Controller
            name="barang"
            control={control}
            render={({ field }) =>
              <Select
                showSearch
                placeholder="Pilih barang"
                {...field}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            }
          />
        </FormItemComponent> */}

        {/* barang */}
        <FormItemComponent
          label="Barang"
          name="barang"
          isRequired
          errors={errors}
        >
          <Controller
            name="barang"
            control={control}
            render={({ field }) =>
              <Select
                showSearch
                filterOption={false}
                placeholder="Pilih barang"
                onSearch={onSearchFieldBarang}
                options={reqBarangSearch.data?.data?.message.map((item: any, index: any) => ({
                  label: (
                    <Fragment>
                      <Typography.Text strong> {item.nama_barang} </Typography.Text>
                      {/* <br></br>
                      <Typography.Text> {item.peg_nip} </Typography.Text> */}

                      {item.jenis_barang && (
                        <Fragment>
                          <br></br>
                          <Typography.Text> {item.jenis_barang} </Typography.Text>
                        </Fragment>
                      )}

                      {item.merk && (
                        <Fragment>
                          <br></br>
                          <Typography.Text> {item.merk} </Typography.Text>
                        </Fragment>
                      )}

                      {item.no_polisi && (
                        <Fragment>
                          <br></br>
                          <Typography.Text>No Polisi {item.no_polisi} </Typography.Text>
                        </Fragment>
                      )}
                    </Fragment>
                  ),
                  value: item.kode_barang,
                  key: item.kode_barang
                }))}
                notFoundContent={reqBarangSearch.loading ? <Spin size="small" /> : null}
                {...field}
              />
            }
          />
        </FormItemComponent>

        {/* lama pinjam */}
        <FormItemComponent
          label="Tgl Penggunaan"
          name="tgl_penggunaan"
          isRequired
          errors={errors}
        >
          <Controller
            name="tgl_penggunaan"
            control={control}
            render={({ field }) =>
              <RangePicker
                {...field}
                style={{ width: '100%' }}
              // onChange={onTglPinjamChange}
              />
            }
          />
        </FormItemComponent>

        {/* sopir jika barang adalah kendaraan  */}
        {fieldWatchBarang && (
          < FormItemComponent
            label="Nama sopir"
            name="sopir"
            isRequired
            errors={errors}
          >
            <Controller
              name="Supir"
              control={control}
              render={({ field }) =>
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nama sopir"
                  {...field}
                />
              }
            />
          </FormItemComponent>
        )}

        {/*  */}
        <FormItemComponent
          label="Maksud Penggunaan"
          name="maksud_penggunaan"
          isRequired
          errors={errors}
          className="wrap-label"
        >
          <Controller
            name="maksud_penggunaan"
            control={control}
            render={({ field }) =>
              <Input.TextArea
                rows={4}
                // prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Maksud penggunaan"
                {...field}
              />
            }
          />
        </FormItemComponent>

        <div style={{ paddingTop: 24, textAlign: 'right' }}>
          <Space>
            <Button type="default" onClick={closeModalPeminjamanBaru}> Batal </Button>
            <Button type="primary" htmlType="submit"> Simpan </Button>
          </Space>
        </div>

        {/* <p> {!loading && error && (<Alert message={error?.message} type="error" showIcon />)} </p> */}
      </Form>


      {/* {reqPegawaiSearch.data?.data?.message?.map((item: any, index: number) => <div key={index}>{item.peg_nama}</div>)} */}
    </Fragment >
  )
}

export default memo(FormPeminjamanBaru)
