import Features from "../components/Features";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Call from "../components/Call";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero/>
        <Intro/>
        <Features/>
        <Call/>
        <Footer/>
        </div> 

        
 
        
      
      </div>
      
  
  );
}

export default Home; 