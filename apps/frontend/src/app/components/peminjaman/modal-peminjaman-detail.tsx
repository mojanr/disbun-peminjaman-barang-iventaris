import React, { createContext, memo, useContext } from 'react'
import styled from 'styled-components';
import { Avatar, Button, Tooltip, Drawer, Radio, Space, Modal, Descriptions, Badge, Timeline } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { HeaderComponent } from '../common'
import { observer } from 'mobx-react-lite'
import { ModalUtil } from '../../util/modal.util';


class ModalPeminjamanDetailStore extends ModalUtil {

  constructor() {
    super()
  }

}

const context = createContext(new ModalPeminjamanDetailStore())
export const useModalPeminjamanDetail = () => useContext(context)


const ModalPeminjamanDetail = () => {

  const modalPeminjamanDetail = useModalPeminjamanDetail()

  const onClose = () => modalPeminjamanDetail.close()

  return (
    <Modal
      // title="Basic Drawer"
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanDetail.isOpen}
      key="modal-peminjaman-detail"
      footer={null}
    >
      <HeaderComponent title="Detail Peminjaman" />

      <Descriptions bordered layout="horizontal" size="small" column={1} labelStyle={{ width: '35%' }}>
        <Descriptions.Item label="Peminjam">Cloud Database</Descriptions.Item>
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
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanDetail))
