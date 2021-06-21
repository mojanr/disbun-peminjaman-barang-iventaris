import React, { createContext, memo, useContext } from 'react'
import styled from 'styled-components';
import { Avatar, Button, Tooltip, Drawer, Radio, Space, Modal } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { HeaderComponent } from '../common'
import { observer } from 'mobx-react-lite'
import { ModalUtil } from '../../util/modal.util';


class ModalPeminjamanPengembalianStore extends ModalUtil {
  
  constructor() {
    super()
  }

}

const context = createContext(new ModalPeminjamanPengembalianStore())
export const useModalPeminjamanPengembalian = () => useContext(context)


const ModalPeminjamanPengembalian = () => {

  const modalPeminjamanPengembalian = useModalPeminjamanPengembalian()

  const onClose = () => modalPeminjamanPengembalian.close()

  return (
    <Modal
      // title="Basic Drawer"
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanPengembalian.isOpen}
      key="modal-peminjaman-pengembalian"
      footer={null}
    >
      <HeaderComponent title="Pengembalian Barang" />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanPengembalian))
