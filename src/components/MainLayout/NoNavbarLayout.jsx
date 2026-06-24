import React from 'react'
import { Outlet } from 'react-router-dom';

function NoNavbarLayout() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default NoNavbarLayout