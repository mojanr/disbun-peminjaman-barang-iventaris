import React from 'react'
import styled from 'styled-components';
import { PageHeader, Button, Descriptions, Card } from 'antd';
import {
  PlusOutlined,
  FilterOutlined,
  SyncOutlined
} from '@ant-design/icons'
import TablePegawai from '../components/pegawai/table-pegawai';
import { useRequest } from 'ahooks';
import { Api } from '../api/api';
import { HeaderComponent } from '../components/common'

const StyledPage = styled.div`
  .page {
  }
`;

const StyledPageHeader = styled(PageHeader)`
  &&& {
    padding-left: 0;
    padding-right: 0;
  }
`

const StyledCard = styled(Card)`
  &&& {
    border-radius: 6px;
    box-shadow: 0 8px 10px rgb(0 0 0 / 8%);
  }
`


const Pengemudi = () => {


  // // request api
  // const syncAllPegawaiRequest = useRequest(Api.PegawaiApi.syncAll, {
  //   manual: true,
  //   throwOnError: true,
  //   onSuccess: (data) => {
  //     console.log('data', data)
  //     // Promise.resolve(data)
  //   },
  //   onError: (errors) => {
  //     console.log('err', errors)
  //   }
  // })

  // // sync data
  // const syncAllPegawai = async () => {
  //   try {
  //     await syncAllPegawaiRequest.run()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <StyledPage>
      <HeaderComponent
        ghost={true}
        // onBack={() => window.history.back()}
        // onBack={() => window.history.back()}
        title="Pengemudi"
        // subTitle="This is a subtitle"
        extra={[
          // <Button key="3" icon={<SyncOutlined />} onClick={syncAllPegawai}>Sync</Button>,
          <Button key="2" icon={<FilterOutlined />}>Filter</Button>,
          <Button key="1" type="primary" icon={<PlusOutlined />}>
            Pengemudi
          </Button>,
        ]}
      />

      <StyledCard>
        {/* <TablePegawai /> */}
      </StyledCard>
    </StyledPage>
  )
}

export default Pengemudi
