import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="relative w-full h-screen bg-green-100 flex flex-col items-center justify-center text-center px-4 
                 bg-no-repeat bg-right-top bg-cover"
      style={{ backgroundImage: "url('./image/m1.png')" }} // use relative path from /public
    >
      {/* <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
        Welcome to NAVi Courier Services
      </h1> */}
      <p className="text-red-900 text-lg md:text-xl mb-6">
        Your Trusted Logistics Partner
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/blog">
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">
            LEARN MORE
          </button>
        </Link>
        <Link to="/contect">
          <button className="bg-white text-black px-6 py-3 rounded border border-gray-300 hover:bg-gray-100 transition">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
