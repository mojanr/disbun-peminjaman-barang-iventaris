import React, { Fragment, memo } from 'react'
import { Select, Space, Button, Typography, Form, Input, Row, Col, DatePicker } from 'antd'
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useRequest } from 'ahooks';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormItemComponent } from '../common'
import { AuthApi } from '../../api/auth.api';

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

  const { run, data, loading, error } = useRequest('test', {
    manual: true,
    throwOnError: true,
  })

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(FormLoginSchema),
    mode: 'onChange'
  })

  const onSubmit = async (formData: any) => {
    try {
      await run(formData.username, formData.password)
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
              <RangePicker {...field} style={{ width: '100%'}} />
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
