import React, { FC, Fragment, memo, useEffect, useState } from 'react'
import { Upload, message, Space, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useModalPeminjamanUploadBast } from './modal-peminjaman-upload-bast';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { FormItemComponent } from '../common'
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';
import { useDataTablePeminjaman } from './table-peminjaman';
import { ENV } from '../../config/env';

const { Dragger } = Upload;


const FormPeminjamanUploadBastSchema = yup.object().shape({
  file: yup.string().required()
})

const FormPeminjamanUploadBast = () => {

  const [fileList, setFileList] = useState<any>([])
  const [peminjamanId, setPeminjamanId] = useState()
  // use data table peminjaman
  const dataTablePeminjaman = useDataTablePeminjaman()

  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()

  

  const closeModalPeminjamanUploadBast = () => modalPeminjamanUploadBast.close()

  const { run, data, loading, error } = useRequest(Api.PeminjamanApi.uploadBast, {
    manual: true,
    throwOnError: true,
    // onSuccess: (data) => {
    //   console.log('data', data)
    //   // Promise.resolve(data)
    // },
    // onError: (errors) => {
    //   console.log('err', errors)
    // }
  })

  const props = {
    name: 'bast',
    // multiple: true,
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // onChange(info: any) {
    //   const { status } = info.file;
    //   if (status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully.`);
    //   } else if (status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
    // onDrop(e: any) {
    //   console.log('Dropped files', e.dataTransfer.files);
    // },
    accept: '.pdf',
    multiple: false,
    beforeUpload: (file: any) => {
      // this.setState(state => ({
      //   fileList: [...state.fileList, file],
      // }));
      setFileList([file])
      return false;
    },
    onRemove: (file: any) => {
      setFileList([])
    },
    fileList
  };

  // use form
  const { handleSubmit, register, formState: { errors }, setError } = useForm({
    resolver: yupResolver(FormPeminjamanUploadBastSchema),
    mode: 'onChange',
  })

  // submit handler
  const submit = async () => {

    if (fileList[0]) {
      const formData = new FormData()
      formData.append('file', fileList[0])

      try {
        await run(modalPeminjamanUploadBast.getData, formData)
        // show success message
        message.success('Sukses menyimpan data');
        // reload table
        dataTablePeminjaman.runSync()
        // close modal
        closeModalPeminjamanUploadBast()
      } catch (error) {
        console.log(error)
      }
    } else {
      setError('file', { message: 'file cannot be empty' })
    }

  }

  useEffect(() => {
    setPeminjamanId(modalPeminjamanUploadBast.getData)
  }, [modalPeminjamanUploadBast.getData])

  return (
    <Fragment>
      <Button type="primary" block target="_blank" href={`${ENV.baseUrl}/peminjaman/bast/template/${peminjamanId}`}> Download BAST </Button>


      <FormItemComponent
        name="file"
        errors={errors}
      >
        <Dragger {...props} name="file">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Klik atau drag file kesini</p>
          <p className="ant-upload-hint">
            Mohon upload file BAST dalam format pdf yang telah di dowload dan di tanda tangani
          </p>
        </Dragger>
      </FormItemComponent>


      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanUploadBast}> Batal </Button>
          <Button type="primary" onClick={submit} loading={loading}> Simpan </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanUploadBast)
