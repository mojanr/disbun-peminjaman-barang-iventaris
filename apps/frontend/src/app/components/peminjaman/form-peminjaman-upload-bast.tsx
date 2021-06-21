import React, { FC, Fragment, memo } from 'react'
import { Upload, message, Space, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useModalPeminjamanUploadBast } from './modal-peminjaman-upload-bast';


const { Dragger } = Upload;

const FormPeminjamanUploadBast = () => {

  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()

  const closeModalPeminjamanUploadBast = () => modalPeminjamanUploadBast.close()

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Fragment>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Klik atau drag file kesini</p>
        <p className="ant-upload-hint">
          Mohon upload file BAST dalam format pdf
        </p>
      </Dragger>

      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanUploadBast}> Batal </Button>
          <Button type="primary"> Simpan </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanUploadBast)
