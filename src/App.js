import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider';

import { Auth, Campaigns, CampaignDetail, CampaignSettings, Npcs, NpcDetail } from './views/index';
import Navbar from './components/controls/Navbar';
import { Header } from './components/layout/index';
import './App.css';

const App = () => {
  const { authed } = useAuth()

  const RequireAuth = ({ children }) => {
    return authed === true
      ? children
      : <Navigate
          to='/auth'
          replace
        />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              // <RequireAuth>
                <Campaigns />
              // </RequireAuth>
            }
          />
          <Route path="auth" element={<Auth />} />
          <Route path="npcs" element={<Npcs />} />
          <Route path="npcs/detail/:id" element={<NpcDetail />}/>
          <Route path="campaigns/detail/:id" element={<CampaignDetail />} />
          <Route path="campaigns/settings/:id" element={<CampaignSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
