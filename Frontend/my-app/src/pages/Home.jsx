import Features from "../components/Features";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Call from "../components/Call";
import Footer from "../components/Footer";
import Book from "../components/Book";

function Home() {
  return (
    <div className="min-h-screen  bg-white ">

        <Hero/>
        <Book/>
        <Intro/>
        <Features/>
        <Call/>
        <Footer/>
     
        
 
        
      
      </div>
      
  
  );
}

export default Home; 