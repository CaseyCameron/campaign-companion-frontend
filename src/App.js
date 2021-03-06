import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Campaigns, CampaignDetail, CampaignSettings, Npcs, NpcDetail } from './views/index';
import { Header } from './components/layout/index';
import Navbar from './components/controls/Navbar';
import './App.css';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Campaigns />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/npcs" element={<Npcs />} />
          <Route path="/npcs/detail/:id" element={<NpcDetail />} />
          <Route path="/campaigns/detail/:id" element={<CampaignDetail />} />
          <Route
            path="/campaigns/settings/:id"
            element={
              <ProtectedRoute>
                <CampaignSettings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
