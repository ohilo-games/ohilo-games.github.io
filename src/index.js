import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

