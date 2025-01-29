import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

function SaaSSection({canScroll, setCanScroll}) {
  const [showImage, setShowImage] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [canProgress, setCanProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("SaasSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= 0 && rect.bottom >= 0;
        
        if (isInView && !canProgress) {
          setCanProgress(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [canProgress]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (canProgress && event.deltaY > 0 && currentStage < 2) {
        setCurrentStage(prev => prev + 1);
        setCanProgress(false);
        setTimeout(() => setCanProgress(true), 1000);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [canProgress, currentStage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
      setCanProgress(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("SaasSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section's top is at the viewport's top
        const isAtTop = Math.abs(rect.top) < 10; // Small threshold for better detection
        
        if (isAtTop && currentStage < 2) {
          document.body.style.overflow = 'hidden';
          if (!canProgress) {
            setCanProgress(true);
          }
        } else if (currentStage >= 2) {
          document.body.style.overflow = 'auto';
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [canProgress, currentStage]);

  return (
    <div id="SaasSection" className="pt-32 pl-24 bg-primary-dark text-secondary-cream flex flex-col gap-14">
        {!canScroll && (
        <>
          <button
            className={`fixed bottom-4 right-4 px-4 py-2 rounded opacity-0 ${
              canProgress
                ? "bg-primary-light cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!canProgress}
          >
            {canProgress ? "Next Stage" : "Please wait..."}
          </button>

          {/* Added loader indicator */}
          <div className="fixed bottom-8 right-0 transform-translate-x-1/2 flex flex-col items-center gap-2">
            <div
              className={`w-5 h-5 rounded-full border-4 border-gray-200 border-t-primary-light ${
                canProgress ? "opacity-0" : "animate-spin"
              }`}
            ></div>
            {/* <p className="text-sm text-gray-600">
              {canProgress ? 'Scroll to continue' : 'Loading...'}
            </p> */}
          </div>
        </>
      )}
      <div className={`flex gap-14 items-stretch transition-opacity duration-500 `}>
        <img src="/logo-blue-square.svg" alt="Logo" />
        <h2 className="text-[40px] mr-24 leading-tight">
          One SaaS platform{" "}
          <span className={`text-primary-light ${currentStage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            streamlining the entire primary research funnel
          </span>{" "}
          for transparency, quality, and agility to your marketing process
        </h2>
      </div>
      <div className={`flex items-center justify-between transition-opacity duration-500 ${currentStage >= 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-16 w-[30%] font-poppins text-lg ">
          <div className="flex flex-col gap-8 ">
            <p className="tracking-wide">
              Designed to automate and simplify the research infrastructure,
              tools on the EQ platform act as tailwinds propelling the research
              journey – from designing the research objectives to generating the
              output
            </p>
            <p className="tracking-wide">
              Use the EQ platform for DIY research or reach out to Equilibrium
              for 360° services – the choice is yours.
            </p>
          </div>
          <button className="w-fit flex items-center gap-3 font-lexend ">
            <div className={`cursor-pointer `}>
              <h2 className="font-medium whitespace-nowrap">Placeholder know more CTA</h2>
              <div className="h-[1px] bg-secondary-cream  w-full"></div>
            </div>
            <div className="bg-[#2ED89F] w-10 h-10 rounded-full flex items-center justify-center">
              <FiArrowRight className="text-primary-dark text-xl" />
            </div>
          </button>
        </div>
        <div className="w-[60%]">
          <img 
            src={showImage ? "/saas-timeline.svg" : "/saasplat.gif"}
            alt="SaaS platform demonstration" 
            className={`w-full ${currentStage >= 2 ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default SaaSSection;
