import React, { useState ,useEffect, useRef} from "react";
import SlidingSquare from "./SlidingSquare";
import gsap from "gsap";

const tabsData = {
  1: [
    {
      heading: "Brand Health",
      text: "A brand diagnostics and brand tracking to understand your brand’s performance vis-à-vis competitors",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "Iterative testing",
      text: "From idea to execution – keep refining and iterating your offering with an agile insighting process of consumer feedback",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "Consumer profiling for marketing and positioning strategies",
      text: "Segment your audience by profiling basis demographics or psychographics – helps you engineer the ideal strategy for your segments",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      heading: "In-the-moment feedback",
      text: "Capture consumer behavior in a live environment, such as at retail-outlets or at home product usage",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "Communication evaluation",
      text: "Test any kind of communication – a product or service idea, script testing, pilot shows, T.V. advertisements",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      heading: "Exploratory research",
      text: "Broader and extensive in nature in which we take a blue-sky approach to understand the target audience and their needs",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
  2: [
    {
      heading: "Usage and attitude research",
      text: "Better understand consumer behaviour towards your product or service to enhance its features",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      heading: "Packaging design testing",
      text: "Gain in-depth insights on what’s working and what is not for your brand’s product packaging",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "Employee Satisfaction",
      text: "Research existing or prospective employees on their expectations from your firm",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      heading: "Consumer co-creation workshops",
      text: "Ideate and brainstorm with consumers to co-create your product or communication idea",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "Cultural Understanding",
      text: "Understand cultures and sub-cultures and how it impacts your product acceptability",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      heading: "UI and UX Testing",
      text: "Tactical research to understand user experience and journey across digital and physical worlds",
      colSpan: 1,
      rowSpan: 1,
    },
  ],
};

function InsightsSection() {
  const [activeTab, setActiveTab] = useState(1);
  const [showImage, setShowImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    const section = document.getElementById('InsightsSection');
    if (section) {
      observer.observe(section);
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (isVisible && window.scrollY > section?.offsetTop) {
        setHasScrolledDown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Added isVisible to dependencies

  useEffect(() => {
    if(hasScrolledDown){
      gsap.fromTo(
        ".blue-text",
        {
          opacity: 0,
          y: 50,
          rotateX: -45,
          transformOrigin: "0% 50% -50",
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          delay: 0.3,
        }
      );
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [hasScrolledDown]);
  useEffect(() => {
    if(hasScrolledDown){
      document.body.style.overflow = "hidden";
      
      const timer = setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 2000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, [hasScrolledDown]);

  useEffect(() => {
    if (hasScrolledDown) {
      gsap.fromTo(
        ".reveal-text",
        { width: 0, opacity: 0 },
        {
          width: "auto",
          opacity: 1,
          duration: 1.5,
          ease: "power1.out",
        }
      );
    }
  }, [hasScrolledDown]);
  const blueRef= useRef(null)
  return (
    <div id="InsightsSection" className="min-h-screen w-full pt-32 pb-12 px-24">
      {/* Heading and Paragraph */}
      <div className="relative">
        <h2 className="text-[40px] leading-tight">
          Industry-agnostic insighting services
      <span ref={blueRef} className={`text-primary-light  transition-all duration-300 absolute ${hasScrolledDown ? "opacity-100" :"opacity-0"}`}>
            designed for B2C, B2B, and D2C organisations
          </span>{" "}
          <span style={{marginLeft: hasScrolledDown&& blueRef.current?.offsetWidth+20}} className={`transition-all duration-500  `}>
          to demystify macro trends</span>
        </h2>
        <p className="font-poppins text-lg mt-5">
          Rooted in classical business and research principles, we design every
          project with a blend of methodologies, but customize the approach to
          best-fit your unique business needs. A glimpse at the list of endless
          use-cases.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 mt-16 gap-7">
        {tabsData[activeTab].map((item, index) => (
          <SlidingSquare
            key={index}
            index={index}
            sethov={hasScrolledDown}
            heading={item.heading}
            text={item.text}
            colSpan={item.colSpan}
            rowSpan={item.rowSpan}
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-10 text-[40px] mt-16">
        {Object.keys(tabsData).map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(Number(tab))}
            className={`h-[5px] w-1/5 ${
              activeTab === Number(tab) ? "bg-[#2ED89F]" : "bg-gray-300"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default InsightsSection;
