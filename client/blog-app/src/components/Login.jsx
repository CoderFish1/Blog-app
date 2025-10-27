import React from "react";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col mt-5 ">
        <h1 className="mx-auto text-4xl font-bold">Login</h1>
        <input
          type="text"
          className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300 "
          placeholder="username"
        />
        <input
          type="text"
          className="mx-auto w-xl p-2 m-4 border-2 rounded-4xl hover:bg-gray-300"
          placeholder="password"
        />
        <button className="border w-[8vw] p-2 mt-2 font-medium rounded-3xl bg-gray-400 mx-auto hover:bg-gray-500">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
