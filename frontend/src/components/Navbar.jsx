import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async (e) => {
  e.preventDefault();
  try {
    // Send logout request to the server
    await axios.post(
      "https://samayyatra.onrender.com/api/v1/user/logout",
      {},
      { withCredentials: true }
    );

    // Clear authentication state and local storage
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem("authToken"); // Clear the token from localStorage

    toast.success("Logged out successfully");
    navigateTo("/");
  } catch (error) {
    // Clear localStorage even if the request fails
    localStorage.removeItem("authToken");

    toast.success("Logged out successfully");
  }
};


  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src="sy.webp" alt="" className="w-10 ml-2" />
              <div className="text-gradient">
                <Link
                  to={"/"}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-4xl font-bold"
                >
                  Samayyatra
                </Link>
              </div>
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-6 text-gray-200 text-xl py-4">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/capsules"}>Capsules</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  {!isAuthenticated ? (
                    " "
                  ) : (
                    <Link to={"/profile"}>Profile</Link>
                  )}
                </li>
              </ul>
            </div>
            <div className="hidden sm:block">
              {!isAuthenticated ? (
                <Link
                  to={"/signup"}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Signup
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              )}
            </div>
            {/* Hamburger Icon */}
            <div
              className="sm:hidden cursor-pointer text-white text-4xl"
              onClick={toggleMenu}
            >
              ☰
            </div>
          </div>
        </div>
        {/* Sliding Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-3/4 h-full bg-black/90 text-white transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMenu}
          >
            ✖
          </button>
          <ul className="flex flex-col gap-6 text-xl py-20 px-6">
            <li>
              <Link to={"/"} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/capsules"} onClick={toggleMenu}>
                Capsules
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              {!isAuthenticated ? " " : <Link to={"/profile"}>Profile</Link>}
            </li>
            <li>
              {!isAuthenticated ? (
                <Link
                  to={"/signup"}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Signup
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-white border-2 border-white px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
