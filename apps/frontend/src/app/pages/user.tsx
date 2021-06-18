import React from 'react'
import styled from 'styled-components';
import { PageHeader, Button, Descriptions, Card } from 'antd';
import {
  PlusOutlined,
  FilterOutlined
} from '@ant-design/icons'
import TableUser from '../components/user/table-user';

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


const User = () => {
  return (
    <StyledPage>
      <StyledPageHeader
        ghost={true}
        // onBack={() => window.history.back()}
        // onBack={() => window.history.back()}
        title="User"
        // subTitle="This is a subtitle"
        extra={[
          // <Button key="3">Peminjam Baru</Button>,
          <Button key="2" icon={<FilterOutlined />}>Filter</Button>,
          <Button key="1" type="primary" icon={<PlusOutlined />}>
            User
          </Button>,
        ]}
      />

      <StyledCard>
        <TableUser />
      </StyledCard>
    </StyledPage>
  )
}

export default User
