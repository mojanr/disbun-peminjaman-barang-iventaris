import React, { createContext, memo, useContext } from 'react'
import { Modal } from 'antd';
import { HeaderComponent } from '../common'
import { observer } from 'mobx-react-lite'
import { ModalUtil } from '../../util/modal.util';

class ModalPeminjamanFilterStore extends ModalUtil {

  constructor() {
    super()
  }

}

const context = createContext(new ModalPeminjamanFilterStore())
export const useModalPeminjamanFilter = () => useContext(context)


const ModalPeminjamanFilter = () => {

  const modalPeminjamanFilter = useModalPeminjamanFilter()

  const onClose = () => modalPeminjamanFilter.close()

  return (
    <Modal
      // title="Basic Drawer"
      style={{ borderRadius: 20 }}
      bodyStyle={{ borderRadius: 20 }}
      closable={true}
      mask={true}
      onCancel={onClose}
      visible={modalPeminjamanFilter.isOpen}
      key="modal-peminjaman-filter"
      footer={null}
    >
      <HeaderComponent title="Filter Pencarian Peminjaman" />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default memo(observer(ModalPeminjamanFilter))
