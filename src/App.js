import React, { render, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthProvider'

import { Campaigns, Npcs } from './views/index'
import Header from './components/layout/Header'

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
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={
            // <RequireAuth>
              <Campaigns />
            // </RequireAuth>  
          } />
          <Route path='/npcs' element={<Npcs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
