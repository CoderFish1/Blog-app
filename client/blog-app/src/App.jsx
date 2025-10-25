import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="cont">
        <div className=" nav flex justify-between p-4">
        <div className="logo font-bold text-2xl">BlogLOGO</div>
        <ul className='flex gap-4'>
          <li>Login</li>           
          <li>Register</li>           
        </ul>
      </div>
      </div>
      <div className="content">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App
