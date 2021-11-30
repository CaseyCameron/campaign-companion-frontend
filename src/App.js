import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider';

import { Campaigns, CampaignSettings, Npcs } from './views/index';
import { Header, Footer, Navbar } from './components/layout/index';

import './App.css';

const App = () => {
  // const { authed } = useAuth()
  // console.log(authed)

  // const RequireAuth = ({ children }) => {
  //   return authed === true
  //     ? children
  //     : <Navigate
  //         to='/auth'
  //         replace
  //       />
  // }

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
          <Route path="/npcs" element={<Npcs />} />
          <Route path="campaigns/settings/:id" element={<CampaignSettings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
