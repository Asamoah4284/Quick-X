import React from 'react';

const Hero = () => {
  return (
    <div className="text-white py-12">
      <div className="max-w-6xl mx-auto md:px-12 px-4 pt-8 md:py-20 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Message */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="relative">
           
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              Trade Smarter with Our Forex Solutions
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 text-black">
            Access real-time market data, advanced analytics, and expert insights to make informed trading decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Sign Up for Free
            </button>
            <button className="bg-transparent border border-blue-400 text-blue-500 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right side - Forex Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className=""></div>
            <img 
              src="images/1.jpeg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-lg shadow-xl backdrop-blur-sm border border-white/10">
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
