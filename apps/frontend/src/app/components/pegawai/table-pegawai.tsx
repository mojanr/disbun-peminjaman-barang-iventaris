import React, { memo, useEffect } from 'react'
import { Table, Tag, Space, Row, Col, Typography, Avatar } from 'antd';
import { useRequest } from 'ahooks';
import { Api } from '../../api/api';

const TablePegawai = () => {

  // request apit
  const { run, data, loading, error } = useRequest(Api.PegawaiApi.findAll, {
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

  const columns = [
    {
      title: 'No',
      // dataIndex: 'no',
      key: 'no',
      width: 10,
      render: (value: any, record: any, index: any) => index + 1
    },
    {
      title: 'Nama / NIP',
      dataIndex: 'peg_nip',
      // key: 'nama_nip',
      width: 450,
      render: (value: any, record: any, index: any) => (
        <Row>
          <Col span={4}>
            <Avatar size={50} src={record.peg_foto_url} />
          </Col>
          <Col span={20}>
            <Typography.Text strong> {record.peg_nama_lengkap} </Typography.Text>
            <br></br>
            Nip. <Typography.Text> {record.peg_nip} </Typography.Text>
          </Col>
        </Row>
      )
    },
    {
      title: 'Unit Kerja',
      dataIndex: 'unit_kerja_nama',
      key: 'unit_kerja_nama',
      width: 450,
    },
    {
      title: 'Jabatan',
      dataIndex: 'jabatan_nama',
      key: 'jabatan_nama',
      width: 450,
    },
    {
      title: 'Last Update',
      dataIndex: 'last_update_local',
      key: 'last_update_local',
      width: 100,
    },
    // {
    //   title: 'NIP',
    //   dataIndex: 'peg_nip',
    //   key: 'peg_nip',
    // },
    // {
    //   title: 'NIP',
    //   dataIndex: 'peg_nip',
    //   key: 'peg_nip',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
  ];

  // effect
  useEffect(() => {
    init()
  }, [])

  // init
  const init = async () => {
    try {
      await run()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Table rowKey={(record) => record.peg_nip} dataSource={data?.data?.message} columns={columns} loading={loading} size="small" pagination={false} scroll={{ x: 1800 }}/>
  )
}

export default memo(TablePegawai)
