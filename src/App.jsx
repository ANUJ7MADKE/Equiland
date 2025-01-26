import React, { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import HeroPage from './pages/HeroPage'
import SaaSSection from './components/SaaSSection'
import SlidingSquare from './components/SlidingSquare'
import InsightsGrid from './components/InsightsSection'
import MarketSection from './components/MarketSection'
import ContactUsSection from './components/ContactUsSection'
import Footer from './components/Footer'
import OurJourneyPage from './pages/OurJourneyPage'
function App() {
  const [canScroll, setCanScroll] = useState(true);

  useLayoutEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Your GSAP animations will go here
      gsap.from(".hero-animation", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <div className='font-lexend text-text-brownish bg-secondary-cream'>
      <Navbar canScroll={canScroll} setCanScroll={setCanScroll}/>
      <HeroPage canScroll={canScroll} setCanScroll={setCanScroll} />
      <SaaSSection/>
      <InsightsGrid/>
      <MarketSection/>
      <OurJourneyPage />

      <ContactUsSection/>
      <Footer/>
    </div>
  );
}

export default App;
