import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import { UserContextProvider } from "./UserContext"; 
import CreatePost from "./components/CreatePost";

function App() {
  const [count, setCount] = useState(0);

  return (
    // CHANGE 2: Wrap your Routes in the UserContextProvider
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create" element={<CreatePost/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;