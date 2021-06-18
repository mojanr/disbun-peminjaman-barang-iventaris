import React, { FC } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import styled from 'styled-components';
import Layout from '../components/dashboard/layout';

const StyledPage = styled.div`
  .page {
  }

  height: 100%;
`;

const Dashboard: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <StyledPage>
      <Layout> 
        {renderRoutes(route?.routes)}
      </Layout>
    </StyledPage>
  )
}

export default Dashboard
