import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import OurJourneyPage from "./pages/OurJourneyPage";

function App() {
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
    <div className="font-lexend text-text-brownish bg-secondary-cream overflow-x-hidden ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/our-journey" element={<OurJourneyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
