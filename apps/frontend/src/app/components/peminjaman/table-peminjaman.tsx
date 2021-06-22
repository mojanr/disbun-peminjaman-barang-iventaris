import React, { memo, useEffect } from 'react'
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
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useModalPeminjamanDetail } from './modal-peminjaman-detail';
import { useModalPeminjamanFilter } from './modal-peminjaman-filter';
import { useModalPeminjamanPengembalian } from './modal-peminjaman-pengembalian';
import { useModalPeminjamanUploadBast } from './modal-peminjaman-upload-bast';
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';


const StyledButton = styled(Button)`
  &&&:hover,
  &&&:active,
  &&&:visited {
    background-color: ${STYLE.COLOR.SOFT_BLUE} !important;
  }
`


const TablePeminjaman = () => {


  // request api
  const { run, data, loading, error } = useRequest(Api.PeminjamanApi.findAll, {
    manual: true,
    throwOnError: true,
    onSuccess: (data) => {
      console.log('data', data)
      // Promise.resolve(data)
    },
    onError: (errors) => {
      console.log('err', errors)
    }
  })

  // modal
  const modalPeminjamanBaru = useModalPeminjamanBaru()
  const modalPeminjamanDetail = useModalPeminjamanDetail()
  const modalPeminjamanFilter = useModalPeminjamanFilter()
  const modalPeminjamanPengembalian = useModalPeminjamanPengembalian()
  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()


  //
  const openModalPeminjamanBaru = () => modalPeminjamanBaru.open()
  const openModalPeminjamanDetail = () => modalPeminjamanDetail.open()
  const openModalPeminjamanFilter = () => modalPeminjamanFilter.open()
  const openModalPeminjamanPengembalian = () => modalPeminjamanPengembalian.open()
  const openModalPeminjamanUploadBast = () => modalPeminjamanUploadBast.open()

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];


  const actionMenu = (
    <Menu>
      <Menu.Item key="1" icon={<FileSearchOutlined style={{ color: 'blue', fontSize: 20 }} />} onClick={openModalPeminjamanDetail}> Detail </Menu.Item>
      <Menu.Item key="2" icon={<FileDoneOutlined style={{ color: 'green', fontSize: 20 }} />} onClick={openModalPeminjamanPengembalian}> Pengembalian </Menu.Item>
      <Menu.Item key="3" icon={<FileProtectOutlined style={{ color: 'darkorange', fontSize: 20 }} />} onClick={openModalPeminjamanUploadBast}> Upload BAST </Menu.Item>
    </Menu>
  );

  // effect
  useEffect(() => {
    init()
  }, [])


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
      dataIndex: 'peg_nip',
      key: 'peg_nip',
    },
    {
      title: 'Nama Barang',
      dataIndex: 'nama_barang',
      key: 'nama_barang',
    },
    {
      title: 'Status Peminjaman',
      dataIndex: 'status_pinjam',
      key: 'status_pinjam',
      render: (value: any) => {
        switch (value) {
          case 0:
            return <Tag color="#f50" icon={<CloseCircleOutlined />}> Dipinjam </Tag>
          case 1:
            return <Tag color="#f50" icon={<CloseCircleOutlined />}> Dipinjam </Tag>
          case 2:
            return <Tag color="#87d068" icon={<CheckCircleOutlined />}> Kembali </Tag>
          default:
            return <Tag color="#f50" icon={<CloseCircleOutlined />}> Dipinjam </Tag>
        }
      }
    },
    {
      title: 'Status BAST',
      dataIndex: 'bast',
      key: 'bast',
      render: (value: any) => {
        // (<Tag color="#87d068" icon={<CheckCircleOutlined />}> Sudah upload </Tag>)
        if (value) return <Tag color="#87d068" icon={<CheckCircleOutlined />}> Sudah upload </Tag>
        return <Tag color="#f50" icon={<CloseCircleOutlined />}> Belum upload </Tag>
      }
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
          <Dropdown overlay={actionMenu} trigger={['click']}>
            {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <EllipsisOutlined />
          </a> */}
            <StyledButton type="text" shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      )
    },
  ];

  const init = async () => {
    try {
      await run()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Table dataSource={data?.data?.message} columns={columns} loading={loading} />
  )
}

export default memo(TablePeminjaman)
