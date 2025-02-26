import React from "react";
import HeroPage from "../components/HeroPage";
import SaaSSection from "../components/SaaSSection";
import InsightsSection from "../components/InsightsSection";
import MarketSection from "../components/MarketSection";
import ContactUsSection from "../components/ContactUsSection";


function LandingPage() {
  return (
    <div>
      <HeroPage />
      <SaaSSection />
      <InsightsSection />
      <MarketSection />
      <ContactUsSection />
    </div>
  );
}

export default LandingPage;
