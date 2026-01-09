import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
        response.json().then((userInfo) => {
          setUsername(userInfo.username)
        });
      });
  }, []);

  function logOut(){
    fetch("http://localhost:4000/logout",{
      credentials: 'include',
      method: 'POST',
    });
    setUsername(null);
  }
  return (
    <div>
      <div className=" nav flex justify-between p-4">
        <Link to={"/"} className="logo font-bold text-2xl">
          BlogLOGO
        </Link>
        <ul className="flex gap-4">
          {username && (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logOut}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link className="font-medium" to={"/login"}>
                Login
              </Link>
              <Link className="font-medium" to={"/register"}>
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
