import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './common/fonts/Lato-Black.ttf'
import './common/fonts/Lato-Bold.ttf'
import './common/fonts/Lato-Regular.ttf'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
