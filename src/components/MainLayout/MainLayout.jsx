import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


function MainLayout() {
  return (
    <>
      <Navbar />
      <main className='global-main'>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout