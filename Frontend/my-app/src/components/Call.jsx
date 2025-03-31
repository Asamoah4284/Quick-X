import React from 'react';

const Call = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trade Smarter. Analyze Better. Profit Consistently.
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful traders who have mastered the market with our expert-led courses, 
            proven strategies, and personalized mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Browse courses now
            </button>
            <button className="bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-semibold py-3 px-8 rounded-lg transition duration-300">
              Join for free
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Call;
