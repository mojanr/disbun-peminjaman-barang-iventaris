import React, { Fragment, memo } from 'react'
import { Space, Button, Typography } from 'antd'
import { useModalPeminjamanPengembalian } from './modal-peminjaman-pengembalian';

const FormPeminjamanPengembalian = () => {
  
  const modalPeminjamanPengembalian = useModalPeminjamanPengembalian()
  
  const closeModalPeminjamanPengembalian = () => modalPeminjamanPengembalian.close()

  return (
    <Fragment>
      
      <Typography.Text strong> Apakah anda yakin bahwa barang sudah dikembalikan ? </Typography.Text>

      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanPengembalian}> Tidak </Button>
          <Button type="primary"> Ya </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanPengembalian)
