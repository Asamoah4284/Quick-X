import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" text-white pt-10 pb-6 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-4">
            <h4 className="text-xl text-black font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-12 after:h-0.5 after:bg-blue-500">
              About Us
            </h4>
            <p className="text-[#333]">
              We provide innovative solutions to help you achieve your goals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-2">
            <h4 className="text-xl text-black font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-12 after:h-0.5 after:bg-blue-500">
              Quick Links
            </h4>
            <ul>
              <li className="mb-2"><Link to="/" className="text-[#333] hover:text-blue-400 transition-colors">Home</Link></li>
              <li className="mb-2"><Link to="/services" className="text-[#333] hover:text-blue-400 transition-colors">Services</Link></li>
              <li className="mb-2"><Link to="/about" className="text-[#333] hover:text-blue-400 transition-colors">About</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-[#333] hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pl-4">
            <h4 className="text-xl text-black font-semibold mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-12 after:h-0.5 after:bg-blue-500">
              Contact
            </h4>
            <p className="text-[#333] mb-2">Email: info@example.com</p>
            <p className="text-[#333]">Phone: (123) 456-7890</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-[#333]">
            &copy; {currentYear} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
