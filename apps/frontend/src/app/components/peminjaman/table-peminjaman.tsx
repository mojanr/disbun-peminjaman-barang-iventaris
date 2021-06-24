import React, { createContext, memo, useContext, useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Menu, Dropdown, Row, Col, Avatar, Typography } from 'antd';
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
  CheckCircleOutlined,
  PrinterOutlined
} from '@ant-design/icons';
import { useModalPeminjamanBaru } from './modal-peminjaman-baru';
import { useModalPeminjamanDetail } from './modal-peminjaman-detail';
import { useModalPeminjamanFilter } from './modal-peminjaman-filter';
import { useModalPeminjamanPengembalian } from './modal-peminjaman-pengembalian';
import { useModalPeminjamanUploadBast } from './modal-peminjaman-upload-bast';
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';
import { AxiosResponse } from 'axios';
import { makeAutoObservable, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const StyledButton = styled(Button)`
  &&&:hover,
  &&&:active,
  &&&:visited {
    background-color: ${STYLE.COLOR.SOFT_BLUE} !important;
  }
`

// data store
class DataTablePeminjamanStore {

  data: any
  selectedData: any

  constructor() {
    makeAutoObservable(this)
  }

  setData(data: any) {
    this.data = data
  }

  get getData() {
    return toJS(this.data)
  }

  setSelectedData(key: string) {
    this.selectedData = key
  }

  get getSelectedData() {
    return this.selectedData
  }

}
const context = createContext(new DataTablePeminjamanStore())
const useDataTablePeminjamanStore = () => useContext(context)

// custom hooks
export function useDataTablePeminjaman() {
  // use data table store
  const dataTablePeminjamanStore = useDataTablePeminjamanStore()
  // use request api
  const { run, data, loading, error } = useRequest(Api.PeminjamanApi.findAll, {
    manual: true,
    throwOnError: true,
    onSuccess: (data) => {
      console.log('data', data)
      dataTablePeminjamanStore.setData(data)
    },
    onError: (errors) => {
      console.log('err', errors)
    }
  })

  // run sync
  const runSync = async () => {
    try {
      await run()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    runSync,
    data,
    loading,
    error
  }
}

// component
const TablePeminjaman = () => {

  const dataTablePeminjaman = useDataTablePeminjaman()
  const dataTablePeminjamanStore = useDataTablePeminjamanStore()

  // use modal
  // const modalPeminjamanBaru = useModalPeminjamanBaru()
  const modalPeminjamanDetail = useModalPeminjamanDetail()
  // const modalPeminjamanFilter = useModalPeminjamanFilter()
  const modalPeminjamanPengembalian = useModalPeminjamanPengembalian()
  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()
  // use modal handler
  // const openModalPeminjamanBaru = () => modalPeminjamanBaru.open()
  // const openModalPeminjamanDetail = () => modalPeminjamanDetail.open()
  // const openModalPeminjamanFilter = () => modalPeminjamanFilter.open()
  // const openModalPeminjamanPengembalian = () => modalPeminjamanPengembalian.open()
  // const openModalPeminjamanUploadBast = () => modalPeminjamanUploadBast.open()

  // effect
  useEffect(() => {
    function init() {
      dataTablePeminjaman.runSync()
    }
    // call init
    init()
  }, [])

  const actionMenuClick = (e: any, id: string) => {
    // console.log(e)
    switch (e.key) {
      case "1":
        modalPeminjamanDetail.setData(id)
        modalPeminjamanDetail.open()
        break;
      case "2":
        modalPeminjamanPengembalian.setData(id)
        modalPeminjamanPengembalian.open()
        break;
      case "3":
        modalPeminjamanUploadBast.setData(id)
        modalPeminjamanUploadBast.open()
        break;
      default:
        break;
    }
  }

  // action menu
  const actionMenu = (id: string) => (
    <Menu onClick={(e) => actionMenuClick(e, id)}>
      <Menu.Item key="1" icon={<FileSearchOutlined style={{ color: 'blue', fontSize: 20 }} />} > Detail </Menu.Item>
      <Menu.Item key="2" icon={<FileDoneOutlined style={{ color: 'green', fontSize: 20 }} />}> Pengembalian </Menu.Item>
      {/* <Menu.Item key="3" icon={<PrinterOutlined style={{ color: 'darkorange', fontSize: 20 }} />} onClick={openModalPeminjamanUploadBast}> Cetak BAST </Menu.Item> */}
      <Menu.Item key="3" icon={<FileProtectOutlined style={{ color: 'darkorange', fontSize: 20 }} />} > BAST </Menu.Item>
    </Menu>
  );

  const columns = [
    // {
    //   title: 'No',
    //   // dataIndex: 'name',
    //   key: 'no',
    //   render: (text, record, index) => index+1 
    // },
    {
      title: <div style={{ textAlign: 'center' }}> Aksi </div>,
      key: 'aksi',
      width: 100,
      fixed: 'left' as 'left',
      render: (value: any, record: any, index: number) => (
        <div style={{ textAlign: 'center' }}>
          <Dropdown overlay={
            () => actionMenu(record.id)
          } trigger={['click']}>
            <StyledButton type="text" shape="circle" icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      )
    },
    {
      title: 'Tgl Pinjam',
      dataIndex: 'tgl_pinjam',
      key: 'tgl_pinjam',
      width: 120,
      // fixed: 'left' as 'left'
    },
    {
      title: 'Peminjam',
      dataIndex: 'peminjam',
      key: 'peminjam',
      width: 450,
      // fixed: 'left' as 'left',
      render: (value: any, record: any, index: number) => {
        // console.log(value)
        const peminjam = JSON.parse(value)

        return (
          <Row>
            <Col span={4}>
              <Avatar size={50} src={peminjam.peg_foto_url} />
            </Col>
            <Col span={20}>
              <Typography.Text strong> {peminjam.peg_nama_lengkap} </Typography.Text>
              <br></br>
              Nip. <Typography.Text> {peminjam.peg_nip} </Typography.Text>
            </Col>
          </Row>
        )
      }
    },
    {
      title: 'Barang',
      dataIndex: 'barang',
      key: 'barang',
      width: 350,
      render: (value: any, record: any, index: number) => {
        // console.log(value)
        const data = JSON.parse(value)

        // return data.nama_barang
        return (
          <Row>
            {/* <Col span={4}>
              <Avatar size={50} src={data.peg_foto_url} />
            </Col> */}
            <Col span={24}>
              <Typography.Text strong> {data.nama_barang} </Typography.Text>
              <br></br>
              Kode. <Typography.Text> {data.kode_barang} </Typography.Text>
            </Col>
          </Row>
        )
      }
    },
    {
      title: 'Status Peminjaman',
      dataIndex: 'status_peminjaman',
      key: 'status_peminjaman',
      // width: 30,
      render: (value: any) => {
        switch (value) {
          // case 0:
          //   return <Tag color="#faad14" icon={<CloseCircleOutlined />}> Dipinjam </Tag>
          case 1:
            return <Tag color="#faad14" icon={<CloseCircleOutlined />}> Dipinjam </Tag>
          // case 2:
          //   return <Tag color="#87d068" icon={<CheckCircleOutlined />}> Kembali </Tag>
          default:
            return <Tag color="#87d068" icon={<CloseCircleOutlined />}> Kembali </Tag>
        }
      }
    },
    {
      title: 'Status BAST',
      dataIndex: 'bast',
      key: 'bast',
      // width: 50,
      render: (value: any) => {
        // (<Tag color="#87d068" icon={<CheckCircleOutlined />}> Sudah upload </Tag>)
        if (value) return <Tag color="#87d068" icon={<CheckCircleOutlined />}> Sudah upload </Tag>
        return <Tag color="#f50" icon={<CloseCircleOutlined />}> Belum upload </Tag>
      }
    },

  ];

  return (
    <Table
      rowKey={(record) => record.id}
      // dataSource={dataTablePeminjaman.data?.data.message}
      dataSource={dataTablePeminjamanStore.getData?.data.message}
      columns={columns}
      loading={dataTablePeminjaman.loading}
      scroll={{ x: 1350 }}
    />
  )
}

export default memo(observer(TablePeminjaman))
