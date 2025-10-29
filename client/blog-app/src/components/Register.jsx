import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration success");
    } else {
      alert("registration failed");
    }
  }

  return (
    <>
      <div>
        <form className="flex flex-col mt-5 " onSubmit={register}>
          <h1 className="mx-auto text-4xl font-bold">Register</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300 "
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300"
            placeholder="password"
          />
          <button className="border w-[8vw] p-2 mt-2 font-medium rounded-3xl bg-gray-400 mx-auto hover:bg-gray-500">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
