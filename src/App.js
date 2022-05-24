import AboutUsGrid from "./components/AboutUsGrid";
import SeeHowItWorks from "./components/SeeHowItWorks";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Quotes from "./components/Quotes";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <AboutUsGrid />
      <SeeHowItWorks />
      <Quotes />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
