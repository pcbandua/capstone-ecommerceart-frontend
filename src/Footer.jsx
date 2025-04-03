import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/login" className="text-gray-300 hover:text-white">
              Login
            </a>
            <a href="/signup" className="text-gray-300 hover:text-white">
              SignUp
            </a>
            <a href="/artists" className="text-gray-300 hover:text-white">
              Current Artists
            </a>
            <a href="/orders" className="text-gray-300 hover:text-white">
              Order History
            </a>
            {/* Removed invalid dynamic route */}
            <a href="/cartpage" className="text-gray-300 hover:text-white">
              My Cart
            </a>
            <p>Copyright {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
