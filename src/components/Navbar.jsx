import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-red-200 shadow-md w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center overflow-hidden">
            <img src="./image/logoo.png" alt="Logo" className="w-50 h-20 object-contain -translate-x-18" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/trc" className="hover:text-blue-600">Tracking</Link>
            <Link to="/price" className="hover:text-blue-600">Pricing</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <Link to="/contect" className="hover:text-blue-600">Contact Us</Link>
            <Link to="/signin" className="hover:text-blue-600">Sign In</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 pt-2 pb-4 space-y-2 text-gray-800 font-medium">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/trc" className="block hover:text-blue-600">Tracking</Link>
          <Link to="/price" className="block hover:text-blue-600">Pricing</Link>
          <Link to="/about" className="block hover:text-blue-600">About Us</Link>
          <Link to="/blog" className="block hover:text-blue-600">Blog</Link>
          <Link to="/contect" className="block hover:text-blue-600">Contact Us</Link>
          <Link to="/signin" className="block hover:text-blue-600">Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
