import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
   const[username, setUsername] = useState('')
   const[password, setPassword] = useState('')
   const[redirect, setredirect] = useState(false)
   const[error, setError] = useState(false)

async function login(e){
  e.preventDefault();

  const response = await fetch("http://localhost:4000/login",{
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: {'Content-Type':'application/json'},
    credentials: 'include' // to save cookies in react app
  })
  if(response.ok){
    response.json().then(userinfo =>{
      setredirect(true);
    })
    
  }else{
    setError(true)
  }
}

if(redirect){
  return <Navigate to={'/'}/>
}
  return (
    <div>
      {error && <p>Wrong credentials</p>}
      <form className="flex flex-col mt-5 " onSubmit={login}>
        <h1 className="mx-auto text-4xl font-bold">Login</h1>
        <input
          type="text" value={username} onChange={e=>setUsername(e.target.value)}
          className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300 "
          placeholder="Username"
        />
        <input
          type="password" value={password} onChange={e=>setPassword(e.target.value)}
          className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300"
          placeholder="Password"
        />
        <button className="border w-[8vw] p-2 mt-2 font-medium rounded-3xl bg-gray-400 mx-auto hover:bg-gray-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
