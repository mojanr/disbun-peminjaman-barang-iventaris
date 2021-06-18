import styled from 'styled-components';

// import { ReactComponent as Logo } from './logo.svg';
// import star from './star.svg';
import 'antd/dist/antd.css';

import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ROUTE } from './config/route';

const StyledApp = styled.div`
  
`;

export function App() {
  return (
    <StyledApp>
      <Switch>
        {renderRoutes([ROUTE])}
      </Switch>
    </StyledApp>
  );
}

export default App;
