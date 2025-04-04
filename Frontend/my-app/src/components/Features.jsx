import React from 'react';

const Features = () => {
  const featuresList = [
    {
      emoji: "📊",
      title: "Comprehensive Market Analysis",
      description: "No more confusion with complex charts. Follow our clear, structured approach to technical analysis designed to improve your trading decisions.",
      imageUrl: "/images/3.jpeg"
    },
    {
      emoji: "⏱️",
      title: "Efficient Trading Strategies",
      description: "Each strategy is concise and practical, so you can implement effective trades even with limited time in your busy schedule.",
      imageUrl: "/images/4.jpeg"
    },
    {
      emoji: "💡",
      title: "Beyond Basic Trading",
      description: "We go beyond entry and exit points to show you the 'why' behind market movements, helping you develop true forex market intuition.",
      imageUrl: "/images/2.jpeg"
    },
    {
      emoji: "💹",
      title: "Real-World Trading Simulations",
      description: "Practice with real market conditions in our risk-free environment, building the confidence to execute trades in live markets.",
      imageUrl: "/images/5.jpeg"
    },
  
    
  ];

  return (
    <section className="py-16">
      <div className=" max-w-6xl mx-auto mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-black">Why You'll Love Trading With Us</h2>
          <p className="text-xl text-gray-600">Analysis, Strategy, and Consistent Results</p>
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
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
                <p className="text-[#333] text-lg">{feature.description}</p>
              </div>
              
              {/* Glassmorphism Image */}
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Glassmorphism effect */}
                  <div className=""></div>
                  
                  {/* Image */}
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title}
                    className="w-full"
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
