import React from 'react';

const Book = () => {
  return (
    <section className="py-12 md:px-4 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Content Section */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Master Forex Trading
          </h2>
          
          <div className="text-3xl font-bold text-blue-500">
            $49.99
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* What You'll Learn Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {[
                  'Advanced trading strategies',
                  'Risk management techniques',
                  'Market analysis fundamentals',
                  'Trading psychology mastery'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Get Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-700">
                What You'll Get
              </h3>
              <ul className="space-y-3">
                {[
                  '300+ pages of expert content',
                  'Practical examples & case studies',
                  'Access to online resources',
                  'Lifetime updates'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Your Copy Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[300px] h-[400px] transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/images/6.png"
              alt="Forex Trading Book Cover"
              className="w-full h-full object-cover rounded-lg "
            />
            {/* Add a decorative element */}
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Book;
