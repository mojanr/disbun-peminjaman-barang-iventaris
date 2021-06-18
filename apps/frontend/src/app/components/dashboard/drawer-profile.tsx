import React, { createContext, memo, useContext } from 'react'
import styled from 'styled-components';
import { Avatar, Button, Tooltip, Drawer, Radio, Space } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react-lite'
import { makeAutoObservable, observable } from 'mobx';
import { DrawerUtil } from '../../util/drawer.util';


class DrawerProfileStore extends DrawerUtil {

  constructor() {
    super()
    // makeAutoObservable(this)
  }

}

const context = createContext(new DrawerProfileStore())
export const useDrawerProfile = () => useContext(context)


const DrawerProfile = () => {

  const drawerProfile = useDrawerProfile()

  const onClose = () => drawerProfile.close()

  return (
    <Drawer
      // title="Basic Drawer"
      placement="left"
      closable={true}
      mask={false}
      onClose={onClose}
      visible={drawerProfile.isOpen}
      getContainer={false}
      key="drawer-left"
      width={330}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default memo(observer(DrawerProfile))
