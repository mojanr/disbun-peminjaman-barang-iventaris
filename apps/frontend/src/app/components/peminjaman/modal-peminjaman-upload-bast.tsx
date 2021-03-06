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
import FormPeminjamanUploadBast from './form-peminjaman-upload-bast';
import { action, computed, makeObservable, observable } from 'mobx';


class ModalPeminjamanUploadBastStore extends ModalUtil {
  
  data: any

  constructor() {
    super()
    makeObservable(this, {
      data: observable,
      setData: action,
      getData: computed
    })
  }

  setData(data: any) {
    this.data = data
  }

  get getData() {
    return this.data
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
      width={620}
      destroyOnClose
    >
      <HeaderComponent title="Upload Berita Acara Peminjaman" />
      <FormPeminjamanUploadBast />
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanUploadBast))
