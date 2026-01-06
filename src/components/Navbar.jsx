import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-2xl">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-bold text-2xl">T</span>
            </div>
            <span className="text-2xl font-bold tracking-wide">TICKETAPP</span>
          </Link>
          
          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-lg font-medium hover:text-blue-200 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              🏠 Home
            </Link>
            <Link 
              to="/events" 
              className="text-lg font-medium hover:text-blue-200 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              🎫 Events
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium hover:text-blue-200 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
            >
              📖 About
            </Link>
          </div>
          
          {/* Auth Button */}
          <Link 
            to="/login"
            className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🔐 Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;