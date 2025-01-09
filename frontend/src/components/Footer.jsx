import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>How It Works</li>
            <li>Create a Capsule</li>
            <li>Explore Public Capsules</li>
            <li>FAQ</li>
            
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal & Privacy</h3>
          <ul className="space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Email Support: support@yourwebsite.com</li>
            <li>Phone Number: +1 (123) 456-7890</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Newsletter Signup</h3>
          <p className="mb-2">Subscribe for the latest updates and capsule inspiration!</p>
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
