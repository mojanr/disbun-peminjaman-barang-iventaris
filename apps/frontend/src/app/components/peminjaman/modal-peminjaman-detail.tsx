import React, { createContext, FC, Fragment, memo, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Avatar, Row, Col, Button, Tooltip, Drawer, Radio, Space, Modal, Descriptions, Badge, Timeline, Skeleton, Typography } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { HeaderComponent } from '../common'
import { observer } from 'mobx-react-lite'
import { ModalUtil } from '../../util/modal.util';
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';
import { action, computed, makeObservable, observable } from 'mobx';


class ModalPeminjamanDetailStore extends ModalUtil {

  data: any

  constructor() {
    super()
    // makeObservable(this, {
    //   data: observable,
    //   setData: action,
    //   getData: computed
    // })
  }

  setData(data: any) {
    this.data = data
  }

  get getData() {
    return this.data
  }

}

const context = createContext(new ModalPeminjamanDetailStore())
export const useModalPeminjamanDetail = () => useContext(context)



// const peminjam component
const PeminjamComponent: FC<{ data: any }> = ({ data }) => {
  const peminjam = JSON.parse(data)

  return (
    <Fragment>
      <Row>
        <Col span={4}>
          <Avatar size={50} src={peminjam.peg_foto_url} />
        </Col>
        <Col span={20}>
          <Typography.Text strong> {peminjam.peg_nama_lengkap} </Typography.Text>
          <br></br>
          Nip. <Typography.Text> {peminjam.peg_nip} </Typography.Text>
        </Col>
      </Row>
      <Typography.Text> {peminjam.jabatan_nama} </Typography.Text>
      <br></br>
      <Typography.Text> {peminjam.unit_kerja_nama} </Typography.Text>
    </Fragment>
  )
}

// const barang component
const BarangComponent: FC<{ data: any }> = ({ data }) => {
  const barang = JSON.parse(data)

  return (
    <Fragment>
      <Typography.Text strong> {barang.nama_barang} </Typography.Text>
      {/* <br></br>
                      <Typography.Text> {item.peg_nip} </Typography.Text> */}

      {barang.jenis_barang && (
        <Fragment>
          <br></br>
          <Typography.Text> {barang.jenis_barang} </Typography.Text>
        </Fragment>
      )}

      {barang.merk && (
        <Fragment>
          <br></br>
          <Typography.Text> {barang.merk} </Typography.Text>
        </Fragment>
      )}

      {barang.no_polisi && (
        <Fragment>
          <br></br>
          <Typography.Text>No Polisi {barang.no_polisi} </Typography.Text>
        </Fragment>
      )}
    </Fragment>
  )
}

// const timeline component
const TimelineComponent: FC<{ data: any }> = ({ data }) => {
  // const barang = JSON.parse(data)

  return (
    <Timeline>
      {data.tgl_pinjam ? <Timeline.Item color="green">Dibuat {data.tgl_pinjam}</Timeline.Item> : <Timeline.Item color="gray"> - </Timeline.Item>}
      {data.tgl_kembali ? <Timeline.Item color="green">Kembali {data.tgl_kembali}</Timeline.Item> : <Timeline.Item color="gray"> Kembali - </Timeline.Item>}
      {/* <Timeline.Item color="green">Digunakan tgl 2015-09-01</Timeline.Item>
      <Timeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item> */}
    </Timeline>
  )
}




const ModalPeminjamanDetail = () => {

  // use modal
  const modalPeminjamanDetail = useModalPeminjamanDetail()
  // modal handler
  const onClose = () => modalPeminjamanDetail.close()

  // use request detail peminjaman
  const reqBarangDetail = useRequest(Api.PeminjamanApi.findOne, {
    manual: true,
    throwOnError: true,
  })

  // effect
  useEffect(() => {
    if (modalPeminjamanDetail.isOpen) {
      async function init() {
        try {
          await reqBarangDetail.run(modalPeminjamanDetail.getData)
        } catch (error) {
          console.log(error)
        }
      }
      // init
      init()
    }
  }, [modalPeminjamanDetail.isOpen])


  return (
    <Modal
      // title="Basic Drawer"
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanDetail.isOpen}
      key="modal-peminjaman-detail"
      footer={null}
      destroyOnClose
      width={620}
    >
      <HeaderComponent title="Detail Peminjaman" />

      {reqBarangDetail.loading ? <Skeleton active /> : (
        <Descriptions bordered layout="horizontal" size="small" column={1} labelStyle={{ width: '30%' }}>
          <Descriptions.Item label="Peminjam">
            <PeminjamComponent data={reqBarangDetail.data?.data?.message?.peminjam} />
          </Descriptions.Item>
          <Descriptions.Item label="Periode Peminjaman">{reqBarangDetail.data?.data?.message.tgl_penggunaan_awal} - {reqBarangDetail.data?.data?.message.tgl_penggunaan_akhir}</Descriptions.Item>
          {/* <Descriptions.Item label="Est. Tgl Pengembalian">YES</Descriptions.Item> */}
          {/* <Descriptions.Item label="Tgl Pengembalian">2018-04-24 18:00:00</Descriptions.Item> */}
          {/* <Descriptions.Item label="Usage Time">
            2019-04-24 18:00:00
          </Descriptions.Item> */}
          <Descriptions.Item label="Barang">
            <BarangComponent data={reqBarangDetail.data?.data.message.barang} />
          </Descriptions.Item>
          <Descriptions.Item label="Maksud Penggunaan">
            {reqBarangDetail.data?.data.message.maksud_penggunaan}
          </Descriptions.Item>
          {reqBarangDetail.data?.data.message.sopir && (
            <Descriptions.Item label="Sopir">
              {reqBarangDetail.data?.data.message.sopir}
            </Descriptions.Item>
          )}
          <Descriptions.Item label="BAST">
            {reqBarangDetail.data?.data.message.bast ? <Badge status='success' text="Sudah upload" /> : <Badge status='error' text="Belum upload" />}
          </Descriptions.Item>
          <Descriptions.Item label="Status Peminjaman">
            {reqBarangDetail.data?.data.message.status_peminjaman == 1 ? <Badge status='warning' text="Dipinjam" /> : <Badge status='success' text="Dikembalikan" />}
          </Descriptions.Item>
          {/* <Descriptions.Item label="History">
            <TimelineComponent data={reqBarangDetail.data?.data.message} />
          </Descriptions.Item> */}
        </Descriptions>
      )}

    </Modal>
  )
}

export default memo(observer(ModalPeminjamanDetail))
