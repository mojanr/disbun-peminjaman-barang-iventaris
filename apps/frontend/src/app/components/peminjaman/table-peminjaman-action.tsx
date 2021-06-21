import React, { memo } from 'react'
import { Table, Tag, Space, Button, Tooltip, Menu, Dropdown } from 'antd';
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

const TablePeminjamanAction = () => {
  return (
    <Menu>
      <Menu.Item key="1" icon={<FileSearchOutlined style={{ color: 'blue', fontSize: 20 }} />}> Detail </Menu.Item>
      <Menu.Item key="2" icon={<FileDoneOutlined style={{ color: 'green', fontSize: 20 }} />}> Pengembalian </Menu.Item>
      <Menu.Item key="3" icon={<FileProtectOutlined style={{ color: 'darkorange', fontSize: 20 }} />}> Upload BAST </Menu.Item>
    </Menu>
  )
}

export default memo(TablePeminjamanAction)
