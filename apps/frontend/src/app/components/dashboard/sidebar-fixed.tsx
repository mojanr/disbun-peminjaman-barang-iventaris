import React, { memo } from 'react'
import styled from 'styled-components';
import { Avatar, Button, Tooltip } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useDrawerProfile } from './drawer-profile'
import { useHistory } from 'react-router-dom';


const FixedSidebar = styled.div`
  position: fixed;
  width: 60px;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  background-color: #1890ff!important;
  z-index: 99;
  /* margin: 0 auto; */
  /* text-align: center; */
  /* z-index: 0; */
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  &::before {
    content: "";
    background-color: rgba(0,0,0,.3)!important;
    display: block;
    height: 100vh;
    width: 60px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`

const SidebarFixed = () => {

  const history = useHistory()

  const drawerProfile = useDrawerProfile()

  const openDrawerProfile = () => drawerProfile.open()

  // logout button
  const logout = () => history.push('/')

  return (
    <FixedSidebar>
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
      {/* <Tooltip title="search" placement="right">
        <Button type="text" shape="circle" icon={<SearchOutlined style={{ color: 'white' }} />} />
      </Tooltip> */}
      {/* <Tooltip title="notification" placement="right">
        <Button type="text" shape="circle" icon={<BellOutlined style={{ color: 'white' }} />} />
      </Tooltip>
      <Tooltip title="account center" placement="right">
        <Button type="text" shape="circle" icon={<UserOutlined style={{ color: 'white' }} />} onClick={openDrawerProfile} />
      </Tooltip> */}
      <Tooltip title="logout" placement="right">
        <Button type="text" shape="circle" icon={<LogoutOutlined style={{ color: 'white' }} />} onClick={logout} />
      </Tooltip>
    </FixedSidebar>
  )
}

export default memo(SidebarFixed)
