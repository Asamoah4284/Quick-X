import React from 'react';

const Intro = () => {
  const stats = [
    { value: '10M+', label: 'Student Thoughts', icon: 'fas fa-comments' },
    { value: '15+', label: 'Years Experience', icon: 'fas fa-award' },
    { value: '200+', label: 'Courses Created', icon: 'fas fa-book-open' },
    { value: '98%', label: 'Satisfaction Rate', icon: 'fas fa-star' },
  ];

  return (
    <section className="md:py-24 py-8">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        {/* <div className="max-w-4xl mx-auto text-center mb-20 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-black">
            Welcome to Your <span className="text-blue-600">Learning Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I'm excited to guide you through this transformative course. My teaching approach combines 
            theoretical knowledge with practical applications to ensure you gain skills that matter in the real world.
          </p>
        </div> */}

        {/* Video Section */}
        <div className="mb-20 relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 h-[250px] md:h-[450px]">
            <iframe 
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/your-video-id" 
              title="Course Introduction" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Stats Boxes */}
        <div className="mt-24 max-w-6xl mx-auto md:px-16 px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Why Traders Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <i className="fas fa-chart-line text-blue-500 text-xl group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-black ml-4">
                  Advanced Trading Tools
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Access professional charting, technical indicators, and automated trading systems to execute your strategy with precision.
              </p>
              <div className="mt-6 flex items-center text-blue-500 font-medium">
                <span>Learn more</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <i className="fas fa-percent text-blue-500 text-xl group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-black ml-4">
                  Competitive Spreads
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Trade with tight spreads across all major, minor, and exotic currency pairs, maximizing your profit potential.
              </p>
              <div className="mt-6 flex items-center text-blue-500 font-medium">
                <span>Learn more</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <i className="fas fa-chart-bar text-blue-500 text-xl group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-black ml-4">
                  Real-time Market Analysis
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Stay ahead with instant economic updates, expert insights, and market sentiment indicators to inform your trading decisions.
              </p>
              <div className="mt-6 flex items-center text-blue-500 font-medium">
                <span>Learn more</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
