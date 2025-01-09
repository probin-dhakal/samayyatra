import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./main";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import About from "./pages/About.jsx";
import Capsules from "./pages/Capsules.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import FAQ from "./pages/FAQ.jsx";
import url from "./utils/url.js";
import axios from "axios";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Cookies from "js-cookie";
import CreateCapsule from "./pages/CreateCapsule.jsx";
import OpenedCapsule from "./pages/OpenedCapsule.jsx";

const App = () => {
  const {
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    user,
    capsules,
    setCapsules,
  } = useContext(Context);

  useEffect(() => {
    const token = Cookies.get("token") || localStorage.getItem("token");

    // console.log(token);
    if (token) {
      setIsAuthenticated(true);

      const fetchUser = async () => {
        try {
          const { data } = await axios.get(
            `https://samayyatra.onrender.com/api/v1/user/profile`,
            { withCredentials: true }
          );
          setUser(data.user);
        } catch (error) {
          console.error("Failed to fetch user", error);
          setIsAuthenticated(false);
          setUser({});
        }
      };

      fetchUser();
    } else {
      setIsAuthenticated(false);
      setUser({});
    }

    const fetchCapsules = async () => {
      try {
        const { data } = await axios.get(
          `https://samayyatra.onrender.com/api/v1/capsule/getallcapsules`,
          { withCredentials: true }
        );
        
        setCapsules(data.allCapsule);
      } catch (error) {
        console.error("Failed to fetch capsules", error);
        setCapsules([]);
      }
    };

    fetchCapsules();
  }, []); // Empty dependency array to run once after mount

//  console.log(capsules)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateCapsule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/capsules" element={<Capsules capsules={capsules} />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/opened-capsule" element={<OpenedCapsule />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
