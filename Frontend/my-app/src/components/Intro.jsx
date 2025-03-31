import React from 'react';

const Intro = () => {
  const stats = [
    { value: '10M+', label: 'Student Thoughts', icon: 'fas fa-comments' },
    { value: '15+', label: 'Years Experience', icon: 'fas fa-award' },
    { value: '200+', label: 'Courses Created', icon: 'fas fa-book-open' },
    { value: '98%', label: 'Satisfaction Rate', icon: 'fas fa-star' },
  ];

  return (
    <section className="md:py-24 py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Welcome to Your Learning Journey
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm excited to guide you through this transformative course. My teaching approach combines 
            theoretical knowledge with practical applications to ensure you gain skills that matter in the real world.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 h-[250px] md:h-[450px] ">
            <iframe 
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/your-video-id" 
              title="Course Introduction" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none"></div>
        </div>

        {/* Stats Boxes */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Traders Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Advanced Trading Tools
              </h3>
              <p className="text-gray-300">
                Access professional charting, technical indicators, and automated trading systems to execute your strategy with precision.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Competitive Spreads
              </h3>
              <p className="text-gray-300">
                Trade with tight spreads across all major, minor, and exotic currency pairs, maximizing your profit potential.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Real-time Market Analysis
              </h3>
              <p className="text-gray-300">
                Stay ahead with instant economic updates, expert insights, and market sentiment indicators to inform your trading decisions.
              </p>
            </div>
          </div>
          </div> 
        
        
      </div>
    </section>
  );
};

export default Intro;
