import React, { createContext, FC, Fragment, memo, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Avatar, Button, Tooltip, Drawer, Radio, Space, Modal, Descriptions, Badge, Timeline, Skeleton, Typography } from 'antd';
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

  id: string = ''

  constructor() {
    super()
    makeObservable(this, {
      id: observable,
      setId: action,
      getId: computed
    })
  }

  setId(id: string) {
    this.id = id
  }

  get getId() {
    return this.id
  }
}

const context = createContext(new ModalPeminjamanDetailStore())
export const useModalPeminjamanDetail = () => useContext(context)



// const peminjam
const PeminjamComponent: FC<{ data: any }> = ({ data }) => {
  const peminjam = JSON.parse(data)

  return (
    <Fragment>

      <div>
        <Avatar size={50} src={peminjam.peg_foto_url} />
      </div>

      <Typography.Text strong> {peminjam.peg_nama_lengkap} </Typography.Text>
      <br></br>
      Nip. <Typography.Text> {peminjam.peg_nip} </Typography.Text>
    </Fragment>
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
    init()
  }, [])

  // init
  const init = async () => {
    try {
      await reqBarangDetail.run(modalPeminjamanDetail.getId)
    } catch (error) {
      console.log(error)
    }
  }

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
    >
      <HeaderComponent title="Detail Peminjaman" />


      {reqBarangDetail.loading ? <Skeleton active /> : (
        <Descriptions bordered layout="horizontal" size="small" column={1} labelStyle={{ width: '35%' }}>
          <Descriptions.Item label="Peminjam">
            <PeminjamComponent data={reqBarangDetail.data?.data?.message?.peminjam} />
          </Descriptions.Item>
          <Descriptions.Item label="Tgl Pinjam">Prepaid</Descriptions.Item>
          {/* <Descriptions.Item label="Est. Tgl Pengembalian">YES</Descriptions.Item> */}
          <Descriptions.Item label="Tgl Pengembalian">2018-04-24 18:00:00</Descriptions.Item>
          <Descriptions.Item label="Usage Time">
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {/* <Badge status="processing" text="Running" /> */}
            <Timeline>
              <Timeline.Item color="green">Dibuat tgl 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Digunakan tgl 2015-09-01</Timeline.Item>
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
              </Timeline.Item>
            </Timeline>
          </Descriptions.Item>
          <Descriptions.Item label="BAST">
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Maksud Penggunaan">
            Untuk
          </Descriptions.Item>
          <Descriptions.Item label="Barang">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      )}
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanDetail))
