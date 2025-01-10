import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              {" "}
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              <Link to={"/"}>How It Works</Link>
            </li>
            <li>
              <Link to={"/create"}>Create a Capsule</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/capsules"}>Explore Public Capsules</Link>
            </li>
            <li>
              {" "}
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal & Privacy</h3>
          <ul className="space-y-1">
            <li> <Link to={"/terms"}>Terms of Service</Link> </li>
            <li> <Link to={"/privacy"}>Privacy Policy</Link></li>
            <li> <Link to={"/cookie"}>Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Email Support: help@Samayyatra.com</li>
            <li>Phone Number: +1 (123) 456-7890</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Newsletter Signup</h3>
          <p className="mb-2">
            Subscribe for the latest updates and capsule inspiration!
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 text-black rounded"
          />
        </div>
      </div>
      <hr />
      <div className="text-center mt-6">
        <p>&copy; 2025 Samayyatra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
