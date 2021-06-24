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
import FormPeminjamanPengembalian from './form-peminjaman-pengembalian';
import { action, computed, makeObservable, observable } from 'mobx';

class ModalPeminjamanPengembalianStore extends ModalUtil {
  
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
      width={620}
    >
      <HeaderComponent title="Pengembalian Barang" />
      <FormPeminjamanPengembalian />
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanPengembalian))
