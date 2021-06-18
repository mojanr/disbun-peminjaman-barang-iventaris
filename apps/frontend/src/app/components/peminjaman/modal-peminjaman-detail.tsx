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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanDetail))
