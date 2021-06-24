import React, { Fragment, memo, useEffect } from 'react'
import { Space, Button, Typography, message } from 'antd'
import { useModalPeminjamanPengembalian } from './modal-peminjaman-pengembalian';
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';
import { useDataTablePeminjaman } from './table-peminjaman';

const FormPeminjamanPengembalian = () => {
  // use modal
  const modalPeminjamanPengembalian = useModalPeminjamanPengembalian()
  // use data table peminjaman
  const dataTablePeminjaman = useDataTablePeminjaman()
  // use request detail peminjaman
  const reqBarangDetail = useRequest(Api.PeminjamanApi.pengembalian, {
    manual: true,
    throwOnError: true,
  })

  // // effect
  // useEffect(() => {
  //   if (modalPeminjamanPengembalian.isOpen) {
  //     async function init() {
  //       try {
  //         await reqBarangDetail.run(modalPeminjamanPengembalian.getData)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     // init
  //     init()
  //   }
  // }, [modalPeminjamanPengembalian.isOpen])

  const closeModalPeminjamanPengembalian = () => modalPeminjamanPengembalian.close()

  const submitPengembalian = async () => {
    try {
      await reqBarangDetail.run(modalPeminjamanPengembalian.getData)
      // show success message
      message.success('Sukses menyimpan data');
      // reload table
      dataTablePeminjaman.runSync()
      // close modal
      closeModalPeminjamanPengembalian()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>

      <Typography.Text strong> Apakah anda yakin bahwa barang sudah dikembalikan ? </Typography.Text>

      <div style={{ paddingTop: 24, textAlign: 'right' }}>
        <Space>
          <Button type="default" onClick={closeModalPeminjamanPengembalian}> Tidak </Button>
          <Button type="primary" onClick={submitPengembalian} loading={reqBarangDetail.loading}> Ya </Button>
        </Space>
      </div>
    </Fragment>
  )
}

export default memo(FormPeminjamanPengembalian)
