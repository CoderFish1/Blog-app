import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        response.json().then((info) => {
          setUserInfo(info);
        });
      }
    });
  }, []);

  function logOut() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <nav className="border-b shadow-sm fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          BlogLOGO
        </Link>

        {/* Links */}
        <ul className="flex gap-4 items-center text-sm md:text-base">
          {username && (
            <>
              <Link
                to="/create"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Create Post
              </Link>

              <button
                onClick={logOut}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          )}

          {!username && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
