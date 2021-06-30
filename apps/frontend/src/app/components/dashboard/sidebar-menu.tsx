import React, { memo } from 'react'
import styled from 'styled-components';
import { Menu as Menu } from 'antd';
import { Link } from 'react-router-dom'
import {
  AppstoreOutlined,
  MailOutlined,
  HomeOutlined,
  UserOutlined,
  ShareAltOutlined,
  TeamOutlined,
  DropboxOutlined,
  FormOutlined,
  SettingOutlined
} from '@ant-design/icons';
import logoDisbun from '../../../assets/LOGO DISBUN 2.png'

const { SubMenu } = Menu;

const StyledPage = styled.div`
  .page {
  }

  height: 100%;
`;

const StyledMenu = styled(Menu)`
  &&& {
    padding: 15px 28px;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    overflow-y: auto;
  }
`

const StyledSubMenu = styled(SubMenu)`
  &&& {
    color: #325a80!important;
    /* color: !important; */
    font-weight: 500;
    background-color: transparent;

    * {
      background-color: transparent;
    }
  }
`

const StyledMenuItem = styled(Menu.Item)`
  &&& {
    background-color: transparent;
    font-weight: 500;
    color: #325a80!important;
  }
`

const SidebarMenu = () => {
  return (
    <StyledPage>

      <StyledMenu
        // onClick={this.handleClick}
        // style={{ width: 256 }}
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['5']}
        mode="inline"
      >
        <div>
          <img src={logoDisbun} style={{ width: 100, paddingLeft: 20, paddingBottom: 10 }} />
        </div>
        {/* <StyledMenuItem key="1" icon={<HomeOutlined />}><Link to="/dashboard/main">Dashboard</Link></StyledMenuItem> */}
        {/* <StyledMenuItem key="2" icon={<UserOutlined />}><Link to="/dashboard/user">User</Link></StyledMenuItem> */}
        {/* <StyledMenuItem key="3" icon={<TeamOutlined />}><Link to="/dashboard/pengemudi">Pengemudi</Link></StyledMenuItem> */}
        {/* <StyledMenuItem key="3" icon={<ShareAltOutlined />}><Link to="/dashboard/role">Role</Link></StyledMenuItem> */}
        <StyledMenuItem key="4" icon={<TeamOutlined />}><Link to="/dashboard/pegawai">Pegawai</Link></StyledMenuItem>
        {/* <StyledSubMenu key="sub5" icon={<DropboxOutlined />} title="Barang Inventaris">
          <StyledMenuItem key="sub51">KIB A</StyledMenuItem>
          <StyledMenuItem key="sub52">KIB B</StyledMenuItem>
          <StyledMenuItem key="sub53">KIB C</StyledMenuItem>
          <StyledMenuItem key="sub54">KIB D</StyledMenuItem>
          <StyledMenuItem key="sub55">KIB E</StyledMenuItem>
        </StyledSubMenu> */}
        <StyledMenuItem key="5" icon={<FormOutlined />}><Link to="/dashboard/peminjaman">Peminjaman</Link></StyledMenuItem>
        {/* <StyledMenuItem key="7" icon={<FormOutlined />}>Pengembalian</StyledMenuItem> */}
        {/* <StyledSubMenu key="sub1" icon={<MailOutlined />} title="Dashboard">
          <Menu.ItemGroup key="g1" title="Item 1">
            <StyledMenuItem key="1">Option 1</StyledMenuItem>
            <StyledMenuItem key="2">Option 2</StyledMenuItem>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <StyledMenuItem key="3">Option 3</StyledMenuItem>
            <StyledMenuItem key="4">Option 4</StyledMenuItem>
          </Menu.ItemGroup>
        </StyledSubMenu> */}
        {/* <StyledSubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <StyledMenuItem key="5">Option 5</StyledMenuItem>
          <StyledMenuItem key="6">Option 6</StyledMenuItem>
          <StyledSubMenu key="sub3" title="Submenu">
            <StyledMenuItem key="7">Option 7</StyledMenuItem>
            <StyledMenuItem key="8">Option 8</StyledMenuItem>
          </StyledSubMenu>
        </StyledSubMenu>
        <StyledSubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <StyledMenuItem key="9">Option 9</StyledMenuItem>
          <StyledMenuItem key="10">Option 10</StyledMenuItem>
          <StyledMenuItem key="11">Option 11</StyledMenuItem>
          <StyledMenuItem key="12">Option 12</StyledMenuItem>
        </StyledSubMenu> */}
      </StyledMenu>
    </StyledPage>
  )
}

export default memo(SidebarMenu)
