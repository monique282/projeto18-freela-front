

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Global from './Styled/GlobalStyle.js';
import Reset from './Styled/ResetStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>
);
