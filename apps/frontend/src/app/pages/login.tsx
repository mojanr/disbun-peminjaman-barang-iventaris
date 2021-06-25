import React from 'react'
import { Card, Typography } from 'antd';
import styled from 'styled-components';
import FormLogin from '../components/login/form-login';
import { HeaderComponent } from '../components/common'
import logoDisbun from '../../assets/LOGO DISBUN 2.png'

const StyledPage = styled.div`
  .page {
  }

  /* background-color: rgba(209,250,229, 1); */
  width: 100%;
  height: 100vh;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    text-align: center;
    color: white;
    padding: 40px 0;
  }
`

const StyledCard = styled(Card)`
  border-radius: 6px;
  max-width: 350px;
  margin: auto;
`

const Login = () => {
  return (
    <StyledPage>
      {/* <StyledTitle> App </StyledTitle> */}

      <div style={{ padding: '50px 24px 0px 24px'}}>
        <StyledCard>
          <img src={logoDisbun} style={{ width: 150 }} />
          <HeaderComponent title="Peminjaman Barang">
            <Typography.Text strong > Lakukan login untuk menggunakan aplikasi </Typography.Text>
          </HeaderComponent>
          <FormLogin />
        </StyledCard>
      </div>
      {/* <FormLogin /> */}
    </StyledPage>
  )
}

export default Login
