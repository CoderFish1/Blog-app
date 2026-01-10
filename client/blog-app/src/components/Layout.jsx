import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='pt-16'>
      <Navbar/>
      <Outlet/> 
      {/* every page loads here */}
    </div>
  )
}

export default Layout
