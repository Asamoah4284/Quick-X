import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto md:py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="md:ml-6 text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text">
              Quick X
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link to="/courses" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Courses
            </Link>
            <Link to="/learning-paths" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Learning Paths
            </Link>
            <Link to="/membership" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Membership
            </Link>
            <Link to="/forum" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Forum
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-4">
              
              <Link to="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                Log In
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/courses" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
              Courses
            </Link>
            <Link to="/learning-paths" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
              Learning Paths
            </Link>
            <Link to="/membership" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
              Membership
            </Link>
            <Link to="/forum" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
              Forum
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                Login
              </Link>
              <Link to="/signup" className="block px-3 py-2 mt-1 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
