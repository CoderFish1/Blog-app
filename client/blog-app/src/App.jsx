import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<div>Registration page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
