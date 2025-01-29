import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurJourneyPage from "./pages/OurJourneyPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [canScroll, setCanScroll] = useState(false);

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
    <div className="font-lexend text-text-brownish bg-secondary-cream">
      <BrowserRouter>
        <Navbar canScroll={canScroll} setCanScroll={setCanScroll} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage canScroll={canScroll} setCanScroll={setCanScroll} />
            }
          />
          <Route path="/our-journey" element={<OurJourneyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
