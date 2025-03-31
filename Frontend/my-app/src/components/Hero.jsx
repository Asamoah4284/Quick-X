import React from 'react';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-20 md:pb-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Message */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-30"></div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Trade Smarter with Our Forex Solutions
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Access real-time market data, advanced analytics, and expert insights to make informed trading decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg shadow-emerald-500/20">
              Sign Up for Free
            </button>
            <button className="bg-transparent border border-blue-400 text-blue-200 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right side - Forex Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-cyan-300/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Forex Trading Dashboard" 
              className="rounded-2xl shadow-2xl max-w-full h-auto bg-gradient-to-r from-emerald-500 to-red-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-5 rounded-lg shadow-xl backdrop-blur-sm border border-white/10">
              <p className="font-bold">24/7 Market Access</p>
              <p className="text-sm">Trade on your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
