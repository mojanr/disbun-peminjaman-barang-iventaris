import React, { memo } from 'react'
import { Table, Tag, Space, Button, Tooltip, Menu, Dropdown } from 'antd';
import styled from 'styled-components';
import { STYLE } from '../../config/style'
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  LogoutOutlined,
  DownOutlined,
  FileSearchOutlined,
  FileDoneOutlined,
  FileProtectOutlined,
  EllipsisOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';


const StyledButton = styled(Button)`
  &&&:hover,
  &&&:active,
  &&&:visited {
    background-color: ${STYLE.COLOR.SOFT_BLUE} !important;
  }
`

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<FileSearchOutlined style={{ color: 'blue', fontSize: 20 }} />}> Detail </Menu.Item>
    <Menu.Item key="2" icon={<FileDoneOutlined style={{ color: 'green', fontSize: 20 }} />}> Pengembalian </Menu.Item>
    <Menu.Item key="3" icon={<FileProtectOutlined style={{ color: 'darkorange', fontSize: 20 }} />}> Upload BAST </Menu.Item>
  </Menu>
);


const TablePeminjaman = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    // {
    //   title: 'No',
    //   // dataIndex: 'name',
    //   key: 'no',
    //   render: (text, record, index) => index+1 
    // },
    {
      title: 'Tgl Pinjam',
      dataIndex: 'tgl_pinjam',
      key: 'tgl_pinjam',
    },
    {
      title: 'Nama Peminjam',
      dataIndex: 'nama_peminjam',
      key: 'nama_peminjam',
    },
    {
      title: 'Nama Barang',
      dataIndex: 'nama_barang',
      key: 'nama_barang',
    },
    {
      title: 'Status Peminjaman',
      dataIndex: 'status_peminjaman',
      key: 'status_peminjaman',
      render: () => (<Tag color="#f50" icon={<CloseCircleOutlined />}> Pinjam </Tag>)
    },
    {
      title: 'Status BAST',
      dataIndex: 'status_bast',
      key: 'status_bas',
      render: () => (<Tag color="#87d068" icon={<CheckCircleOutlined />}> Tersedia </Tag>)
    },
    {
      title: <div style={{ textAlign: 'center' }}> Aksi </div>,
      key: 'aksi',
      width: 75,
      render: () => (
        // <Space>
        //   <Tooltip title="search" placement="top">
        //     <Button type="primary" shape="circle" icon={<SearchOutlined style={{ color: 'white' }} />} />
        //   </Tooltip>
        //   <Tooltip title="notification" placement="top">
        //     <Button type="primary" shape="circle" icon={<BellOutlined style={{ color: 'white' }} />} />
        //   </Tooltip>
        //   <Tooltip title="account center" placement="top">
        //     <Button type="primary" shape="circle" icon={<UserOutlined style={{ color: 'white' }} />} />
        //   </Tooltip>
        //   <Tooltip title="logout" placement="top">
        //     <Button type="primary" shape="circle" icon={<LogoutOutlined style={{ color: 'white' }} />} />
        //   </Tooltip>
        // </Space>
        <div style={{ textAlign: 'center' }}>
          <Dropdown overlay={menu} trigger={['click']}>
            {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <EllipsisOutlined />
          </a> */}
            <StyledButton type="text" shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      )
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default memo(TablePeminjaman)
