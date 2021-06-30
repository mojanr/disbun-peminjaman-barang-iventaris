import { useLocalStorageState } from 'ahooks';
import React, { FC, useEffect } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/dashboard/layout';

const StyledPage = styled.div`
  .page {
  }

  height: 100%;
`;

const Dashboard: FC<RouteConfigComponentProps> = ({ route }) => {

  const [token, setToken] = useLocalStorageState('token')
  const history = useHistory()

  // check token 
  useEffect(() => {
    if (!token) {
      setToken(undefined)
      history.push('/')
    }

    return  () => {
      
    }
  }, [])

  // // check if token change
  // useEffect(() => {
    
  // }, [token])

  return (
    <StyledPage>
      <Layout> 
        {renderRoutes(route?.routes)}
      </Layout>
    </StyledPage>
  )
}

export default Dashboard
