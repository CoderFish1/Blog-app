import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/> 
      {/* every page loads here */}
    </div>
  )
}

export default Layout
