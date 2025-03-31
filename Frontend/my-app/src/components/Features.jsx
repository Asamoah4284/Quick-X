import React from 'react';

const Features = () => {
  const featuresList = [
    {
      emoji: "📊",
      title: "Comprehensive Market Analysis",
      description: "No more confusion with complex charts. Follow our clear, structured approach to technical analysis designed to improve your trading decisions.",
      imageUrl: "https://i.pinimg.com/736x/04/02/c4/0402c4c5f854eb6ac21f607ab5216e0f.jpg"
    },
    {
      emoji: "⏱️",
      title: "Efficient Trading Strategies",
      description: "Each strategy is concise and practical, so you can implement effective trades even with limited time in your busy schedule.",
      imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      emoji: "💡",
      title: "Beyond Basic Trading",
      description: "We go beyond entry and exit points to show you the 'why' behind market movements, helping you develop true forex market intuition.",
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      emoji: "💹",
      title: "Real-World Trading Simulations",
      description: "Practice with real market conditions in our risk-free environment, building the confidence to execute trades in live markets.",
      imageUrl: "https://i.pinimg.com/736x/0a/06/52/0a06529c7a419609755f0edc0dc16dd6.jpg"
    },
    {
      emoji: "🏆",
      title: "Expert Trader Insights",
      description: "Learn from seasoned forex professionals with years of market experience, gaining valuable insights you won't find in typical trading books.",
      imageUrl: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      emoji: "👥",
      title: "Trusted by Successful Traders",
      description: "Join thousands of traders who have transformed their forex performance through our structured approach to currency market education.",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-white">Why You'll Love Trading With Us</h2>
          <p className="text-xl text-gray-400">Analysis, Strategy, and Consistent Results</p>
        </div>
        
        <div className="flex flex-col gap-16">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 md:p-8 ">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-semibold mb-3 text-emerald-400">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
              
              {/* Glassmorphism Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Glassmorphism effect */}
                  <div className="absolute inset-0 bg-gray-800/20 backdrop-blur-[1px] border border-gray-700/30 rounded-lg z-10"></div>
                  
                  {/* Image */}
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
