import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className=" nav flex justify-between p-4">
          <Link to={"/"} className="logo font-bold text-2xl">BlogLOGO</Link>
          <ul className="flex gap-4">
            <Link className='font-medium' to={"/login"}>Login</Link>
            <Link className='font-medium' to={"/register"}>Register</Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
