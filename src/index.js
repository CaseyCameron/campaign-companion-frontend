import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { CampaignProvider } from './contexts/CampaignProvider'
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
    <AuthProvider>
      <CampaignProvider>
        <App />
      </CampaignProvider>
    </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
