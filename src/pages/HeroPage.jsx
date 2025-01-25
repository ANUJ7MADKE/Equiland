import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// Define scroll stages with their thresholds and video sources
const SCROLL_STAGES = {
  INITIAL: {
    threshold: 0,
    videoSrc: "/justlinkeloop3.mp4"
  },
  STAGE_1: {
    threshold: 100,
    videoSrc: "/gridloop.mp4"
  },
  STAGE_2: {
    threshold: 300,
    videoSrc: "/maze.mp4"
  },
  STAGE_3: {
    threshold: 500,
    type: 'image',
    src: "/101.svg"
  }
  // Add more stages as needed
};

function HeroPage() {
  const [activeTab, setActiveTab] = useState("SaaS Platform");
  const [showLogo, setShowLogo] = useState(false);
  const [currentStage, setCurrentStage] = useState('INITIAL');
  const [canScroll, setCanScroll] = useState(false);
  const [canProgress, setCanProgress] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleWheel = (event) => {
      if (!canScroll && event.deltaY > 0 && canProgress) {
        progressToNextStage();
      }
    };

    const handleTouchStart = (e) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStart.current) return;
      
      const deltaY = touchStart.current - e.touches[0].clientY;
      if (!canScroll && deltaY > 0 && canProgress) {
        progressToNextStage();
      }
      touchStart.current = null;
    };

    // Add event listeners for both wheel and touch events
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.body.style.overflow = 'scroll';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [canScroll, canProgress]);
  const touchStart = useRef(null); // Add ref for touch events

  const progressToNextStage = () => {
    if (!canProgress) return;

    const stageSequence = Object.keys(SCROLL_STAGES);
    const currentIndex = stageSequence.indexOf(currentStage);
    
    if (currentIndex < stageSequence.length - 1) {
      setCanProgress(false);
      const newStage = stageSequence[currentIndex + 1];
      setCurrentStage(newStage);
      
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        if (SCROLL_STAGES[newStage].videoSrc) {
          videoRef.current.src = SCROLL_STAGES[newStage].videoSrc;
          videoRef.current.load();
          videoRef.current.play().then(() => {
            videoRef.current.currentTime = currentTime;
          });
        }
      }

      // Enable scrolling if moving to or past STAGE_3
      if (newStage === 'STAGE_3') {
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          setCanScroll(true);
        }, 3000);
      }

      setTimeout(() => {
        setCanProgress(true);
      }, 3000);
    } else {
      // Enable scrolling when reaching the final stage
      document.body.style.overflow = 'auto';
      setCanScroll(true);
      setCanProgress(false); // Prevent further progression attempts
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        progressToNextStage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStage, canProgress]);

  useEffect(() => {
    // Handle video and animations sequence
    const video = videoRef.current;

    // Play video first
    if (video) {
      video.play();
    }

    // Add GSAP animation after 3 seconds
    const timer = setTimeout(() => {
      setShowLogo(true);
      // Animate the hero text elements
      gsap.from(".hero-animation", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Update the GSAP effect for text transition
  useEffect(() => {
    if (currentStage === 'STAGE_1') {
      gsap.fromTo(".stage-text",
        {
          opacity: 0,
          y: 20,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.out",
          delay: 0.3
        }
      );
    } else {
      gsap.to(".stage-text", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in"
      });
    }
    if (currentStage === 'STAGE_3') {
      gsap.fromTo(".stage-text",
        {
          opacity: 0,
          y: 20,
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.out",
          delay: 0.3
        }
      );
    } else {
      gsap.to(".stage-text2", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }, [currentStage]);

  // Add new useEffect for initial delay
  useEffect(() => {
    // Set initial delay before allowing progression
    const timer = setTimeout(() => {
      setCanProgress(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="py-20 font-lexend w-full h-screen">
      {!canScroll && (
        <>
          <button 
            onClick={progressToNextStage}
            className={`fixed bottom-4 right-4 px-4 py-2 rounded opacity-0 ${
              canProgress 
                ? 'bg-primary-light cursor-pointer' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!canProgress}
          >
            {canProgress ? 'Next Stage' : 'Please wait...'}
          </button>
          
          {/* Added loader indicator */}
          <div className="fixed bottom-8 right-0 transform-translate-x-1/2 flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full border-4 border-gray-200 border-t-primary-light ${
              canProgress ? 'animate-none' : 'animate-spin'
            }`}></div>
            <p className="text-sm text-gray-600">
              {canProgress ? 'Scroll to continue' : 'Loading...'}
            </p>
          </div>
        </>
      )}
      <div className="flex flex-col gap-44 items-center justify-center w-full">
        <div className="flex items-center gap-40 w-full">
          <div className="w-[500px] h-[350px] relative flex items-center justify-start">
            {SCROLL_STAGES[currentStage].type === 'image' ? (
              <img 
                src={SCROLL_STAGES[currentStage].src} 
                alt="101" 
                className="ml-[3rem] object-cover"
                style={{
                  width: "500px",
                  height: "150px"
                }}
              />
            ) : (
              <video
                ref={videoRef}
                className="object-cover ml-[3rem]"
                muted
                playsInline
                loop
                style={{
                  width: "500px",
                  height: "350px"
                }}
              >
                <source src={SCROLL_STAGES[currentStage].videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
          <div className={`flex flex-col gap-10 ${showLogo ? "opacity-100" : "opacity-0"}`}>
            {(currentStage=='INITIAL'||currentStage=='STAGE_1')&&  <>
                <h1 className="text-[40px] leading-tight hero-animation">
                We are{" "}
                 {currentStage=='STAGE_1'&& <><span className={`stage-text text-primary-light`}>
                 a tech powered full- </span><br/><span className={`stage-text text-primary-light`}>service insights agency, </span></>}
                 
                  rooted in <br/> classical principles
                </h1>
               {currentStage=='STAGE_1'&& <p className=" font-poppins text-lg hero-animation stage-text">
                Born from the heart to understand the mind, Equilibrium is a full service <br/>agency, committed to providing clients with agile insights through our <br/>proprietary AI-enhanced SaaS platform
                </p>}
              </>}
              {(currentStage=='STAGE_2'||currentStage=='STAGE_3')&&  <>
                <h1 className="text-[40px] leading-tight hero-animation">
                At the core of any business,<br/>
                 {currentStage=='STAGE_3'&& <><span className={`stage-text2 text-primary-light`}>
                 insights are driven by human </span><br/> <span className={`stage-text2 text-primary-light`}> conversations and immersions,  </span></>
                 }<br/>
                  technology only augments your<br/> decision making
                </h1>
               {currentStage=='STAGE_3'&& <p className=" font-poppins text-lg hero-animation stage-text2">
                  Blending conversational and observational insights with other
                  data- <br/>points can do wonders for your business. But collecting
                  and processing <br/>human insights can be resource intensive{" "}
                  <span className="text-primary-light ">
                    {" "}
                    and that's why to empower<br/> your decision-making process, we
                    have two distinct offerings for you...
                  </span>
                </p>}
              </>}
          </div>
        </div>

        <div className="flex items-start gap-20 text-[40px]">
          <div
            className={`cursor-pointer `}
            onClick={() => setActiveTab("SaaS Platform")}
          >
            <h2>SaaS Platform</h2>
            {activeTab === "SaaS Platform" && (
              <div className="h-[5px] bg-[#2ED89F]  w-full mt-2"></div>
            )}
          </div>
          <div
            className={`cursor-pointer `}
            onClick={() => setActiveTab("Insights Agency")}
          >
            <h2>Insights Agency</h2>
            {activeTab === "Insights Agency" && (
              <div className="h-[5px] bg-[#2ED89F]  w-full mt-2"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
