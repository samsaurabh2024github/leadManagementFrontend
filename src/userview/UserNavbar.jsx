import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/urbanLogo.webp";

export default function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
       <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Urban Cruise Logo"
    className="h-10 w-auto object-contain"
  />
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/service" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          <Link
            to="/admin-login"
            className="border px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Admin Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/service"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/admin-login"
            onClick={() => setIsOpen(false)}
            className="block text-center border py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}
