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


class ModalPeminjamanBaruStore extends ModalUtil {
  
  constructor() {
    super()
  }

}

const context = createContext(new ModalPeminjamanBaruStore())
export const useModalPeminjamanBaru = () => useContext(context)


const ModalPeminjamanBaru = () => {

  const modalPeminjamanBaru = useModalPeminjamanBaru()

  const onClose = () => modalPeminjamanBaru.close()

  return (
    <Modal
      // title="Basic Drawer"
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanBaru.isOpen}
      key="modal-peminjaman-baru"
      footer={null}
    >
      <HeaderComponent title="Baru Peminjaman" />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanBaru))
