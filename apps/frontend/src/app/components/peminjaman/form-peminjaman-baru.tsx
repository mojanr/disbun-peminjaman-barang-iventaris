import React, { Fragment, memo } from 'react'
import { Select, Space, Button, Typography, Form, Spin, Input, Row, Col, DatePicker, Empty, message } from 'antd'
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useRequest } from 'ahooks';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormItemComponent } from '../common'
import { AuthApi } from '../../api/auth.api';
import { Api } from '../../api/api';
import { RequestQueryBuilder } from "@nestjsx/crud-request";
import { useDataTablePeminjaman } from './table-peminjaman';

// const { Option } = Select;
const { RangePicker } = DatePicker

// form peminjaman baru schema
const FormPeminjamanSchema = yup.object().shape({
  peminjam: yup.string().required(),
  barang: yup.string().required(),
  tgl_penggunaan: yup.array().required(),
  // sopir: yup.string().required(),
  sopir: yup.string().when('barang', {
    is: (value: string) => {
      const result = value && JSON.parse(value)['no_polisi']
      return !!result
    },
    then: yup.string().required(),
    otherwise: yup.string()
  }),
  maksud_penggunaan: yup.string().required()
})

const FormPeminjamanBaru = () => {

  // use modal
  const modalPeminjamanBaru = useModalPeminjamanBaru()
  // use data table peminjaman
  const dataTablePeminjaman = useDataTablePeminjaman()
  // request handler pegawai
  const reqPegawaiSearch = useRequest(Api.PegawaiApi.search, {
    manual: true,
    throwOnError: true,
  })
  // request handler barang
  const reqBarangSearch = useRequest(Api.BarangApi.search, {
    manual: true,
    throwOnError: true,
  })
  // request handler submit peminjaman
  const reqSubmitPeminjaman = useRequest(Api.PeminjamanApi.peminjaman, {
    manual: true,
    throwOnError: true,
  })

  // form validation
  const { handleSubmit, control, watch, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(FormPeminjamanSchema),
    mode: 'onChange'
  })
  // form watch field
  const fieldWatchBarang = watch('barang')

  // modal handler
  const closeModalPeminjamanBaru = () => modalPeminjamanBaru.close()

  // select search handler
  // on search field pegawai select
  const onSearchFieldPegawai = async (value: any) => {
    try {
      const queryString = RequestQueryBuilder.create({
        fields: [
          "peg_id",
          "peg_nip",
          "peg_nama",
          "peg_nama_lengkap",
          "jabatan_nama",
          "peg_foto_url",
          "unit_kerja_nama",
          "peg_telp_hp"
        ],
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
    // console.log(formData)
    try {
      // serialize data
      // formData.peminjam = JSON.parse(formData.peminjam)
      // formData.barang = JSON.parse(formData.barang)
      formData.tgl_penggunaan = formData.tgl_penggunaan.map((item: any, index: number) => {
        return item.format('YYYY-MM-DD')
      })
      formData.tgl_penggunaan_awal = formData.tgl_penggunaan[0]
      formData.tgl_penggunaan_akhir = formData.tgl_penggunaan[1]
      !JSON.parse(formData.barang)['no_polisi'] && (formData.sopir = null)
      console.log(formData)
      await reqSubmitPeminjaman.run(formData)
      // show success message
      message.success('Sukses menyimpan data');
      // reload table
      dataTablePeminjaman.runSync()
      // close modal
      closeModalPeminjamanBaru()
      // history.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  // const onBarangChange = (value: any) => setValue('barang', value)
  // const onTglPinjamChange = (date: any, dateString: string[]) => {
  //   // console.log(dateString)
  //   setValue('tgl_penggunaan', [...dateString])
  // }

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
                      <Typography.Text className="wrap-label"> {item.jabatan_nama} </Typography.Text>
                    </Fragment>
                  ),
                  value: JSON.stringify(item),
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
                  value: JSON.stringify(item),
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

        {/* sopir jika barang adalah kendaraan  */}
        {fieldWatchBarang && JSON.parse(fieldWatchBarang)['no_polisi'] && (
          < FormItemComponent
            label="Nama pengemudi"
            name="sopir"
            isRequired
            errors={errors}
          >
            <Controller
              name="sopir"
              control={control}
              render={({ field }) =>
                <Input
                  // prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Nama pengemudi"
                  {...field}
                />
              }
            />
          </FormItemComponent>
        )}

        <div style={{ paddingTop: 24, textAlign: 'right' }}>
          <Space>
            <Button type="default" onClick={closeModalPeminjamanBaru}> Batal </Button>
            <Button type="primary" htmlType="submit" loading={dataTablePeminjaman.loading}> Simpan </Button>
          </Space>
        </div>

        {/* <p> {!loading && error && (<Alert message={error?.message} type="error" showIcon />)} </p> */}
      </Form>


      {/* {reqPegawaiSearch.data?.data?.message?.map((item: any, index: number) => <div key={index}>{item.peg_nama}</div>)} */}
    </Fragment >
  )
}

export default memo(FormPeminjamanBaru)
