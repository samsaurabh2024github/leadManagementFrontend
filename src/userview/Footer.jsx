import { Link } from "react-router-dom";
import logo from "../assets/urbanLogo.webp";
import {
  FiPhone,
  FiMail,
  FiMapPin
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
             <img
              src={logo}
              alt="Urban Cruise Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium car & bus rental services across India. Trusted by
              corporates and travelers since 2019.
            </p>

            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/service" className="hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
              <li>
                <Link to="/admin-login" className="hover:text-white transition">Admin Login</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>Car Rental</li>
              <li>Luxury Car & SUV</li>
              <li>Tempo Traveller</li>
              <li>Mini Bus</li>
              <li>Luxury Bus</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiPhone />
                <span>+91 XXX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail />
                <span>info@urbancruise.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Urban Cruise. All rights reserved.
      </div>
    </footer>
  );
}
