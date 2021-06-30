import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  // <StrictMode>
  // <BrowserRouter>
  // </BrowserRouter>
    <HashRouter>
      <App />
    </HashRouter>
  // </StrictMode>,
  ,
  document.getElementById('root')
);
