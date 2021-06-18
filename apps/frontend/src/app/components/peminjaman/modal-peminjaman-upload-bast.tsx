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


class ModalPeminjamanUploadBastStore extends ModalUtil {
  
  constructor() {
    super()
  }

}

const context = createContext(new ModalPeminjamanUploadBastStore())
export const useModalPeminjamanUploadBast = () => useContext(context)


const ModalPeminjamanUploadBast = () => {

  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()

  const onClose = () => modalPeminjamanUploadBast.close()

  return (
    <Modal
      // title="Basic Drawer"
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanUploadBast.isOpen}
      key="modal-peminjaman-upload-bast"
      footer={null}
    >
      <HeaderComponent title="Upload Berita Acara Peminjaman" />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanUploadBast))
