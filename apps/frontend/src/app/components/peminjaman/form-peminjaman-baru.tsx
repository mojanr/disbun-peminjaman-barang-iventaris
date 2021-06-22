import React, { Fragment, memo } from 'react'
import { Select, Space, Button, Typography, Form, Spin, Input, Row, Col, DatePicker } from 'antd'
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useRequest } from 'ahooks';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormItemComponent } from '../common'
import { AuthApi } from '../../api/auth.api';
import { Api } from '../../api/api';

const { Option } = Select;
const { RangePicker } = DatePicker

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

  const reqBarangSearch = useRequest('test', {
    manual: true,
    throwOnError: true,
  })

  const reqSubmitPeminjaman = useRequest('test', {
    manual: true,
    throwOnError: true,
  })

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })


  // on search field pegawai select
  const onSearchFieldPegawai = async (value: any) => {
    try {
      await reqPegawaiSearch.run(JSON.stringify({
        peg_nip: value,
        peg_nama: value,
        peg_nama_lengkap: value,
        unit_kerja_nama: value,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  // form submit
  const onSubmit = async (formData: any) => {
    try {
      await reqSubmitPeminjaman.run(formData.username, formData.password)
      // history.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
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
          name="username"
          isRequired
          errors={errors}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) =>
              <Select
                showSearch
                placeholder="Pilih peminjam"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                onSearch={onSearchFieldPegawai}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
                notFoundContent={reqPegawaiSearch.loading ? <Spin size="small" /> : null}
                {...field}
              />
                // {/* {reqPegawaiSearch.data?.data?.message?.map((item: any, index: number) => <Option key={index} value="jack">{item.nama}</Option>)} */}

                // {/* <Option value="lucy">Lucy</Option>
                // <Option value="tom">Tom</Option> */}
              // </Select>
            }
          />
        </FormItemComponent>

        {/* barang */}
        <FormItemComponent
          label="Barang"
          name="username"
          isRequired
          errors={errors}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) =>
              <Select
                showSearch
                placeholder="Pilih peminjam"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                // filterOption={(input, option) =>
                //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // }
                {...field}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            }
          />
        </FormItemComponent>

        {/* lama pinjam */}
        <FormItemComponent
          label="Lama Pinjam"
          name="username"
          isRequired
          errors={errors}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) =>
              <RangePicker {...field} style={{ width: '100%' }} />
            }
          />
        </FormItemComponent>

        {/* <p> {!loading && error && (<Alert message={error?.message} type="error" showIcon />)} </p> */}
      </Form>


      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanBaru}> Batal </Button>
          <Button type="primary"> Simpan </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanBaru)
