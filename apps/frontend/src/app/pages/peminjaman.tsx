import React from 'react'
import styled from 'styled-components';
import { PageHeader, Button, Descriptions, Card } from 'antd';
import {
  PlusOutlined,
  FilterOutlined
} from '@ant-design/icons'
import TablePeminjaman from '../components/peminjaman/table-peminjaman';
import ModalPeminjamanDetail, { useModalPeminjamanDetail } from '../components/peminjaman/modal-peminjaman-detail';
import ModalPeminjamanFilter, { useModalPeminjamanFilter } from '../components/peminjaman/modal-peminjaman-filter';
import ModalPeminjamanBaru, { useModalPeminjamanBaru } from '../components/peminjaman/modal-peminjaman-baru';
import ModalPeminjamanBast, { useModalPeminjamanUploadBast } from '../components/peminjaman/modal-peminjaman-upload-bast';

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


const Peminjaman = () => {

  const modalPeminjamanFilter = useModalPeminjamanFilter()
  const modalPeminjamanDetail = useModalPeminjamanDetail()
  const modalPeminjamanBaru = useModalPeminjamanBaru()
  const modalPeminjamanUploadBast = useModalPeminjamanUploadBast()

  const openModalPeminjamanFilter = () => modalPeminjamanFilter.open()
  const openModalPeminjamanDetail = () => modalPeminjamanDetail.open()
  const openModalPeminjamanBaru = () => modalPeminjamanBaru.open()
  const openModalPeminjamanUploadBast = () => modalPeminjamanUploadBast.open()

  return (
    <StyledPage>
      <StyledPageHeader
        ghost={true}
        // onBack={() => window.history.back()}
        // onBack={() => window.history.back()}
        title="Peminjaman"
        // subTitle="This is a subtitle"
        extra={[
          // <Button key="3">Peminjam Baru</Button>,
          <Button key="2" icon={<FilterOutlined />} onClick={openModalPeminjamanFilter}>Filter</Button>,
          <Button key="1" type="primary" icon={<PlusOutlined />} onClick={openModalPeminjamanDetail}>
            Peminjam Baru
          </Button>,
        ]}
      />

      <StyledCard>
        <TablePeminjaman />
      </StyledCard>

      {/* modal peminjaman filter */}
      <ModalPeminjamanFilter />
      {/* modal peminjaman detail  */}
      <ModalPeminjamanDetail />
    </StyledPage>
  )
}

export default Peminjaman
