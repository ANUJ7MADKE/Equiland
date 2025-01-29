import React, { useState, useEffect } from "react";
import gsap from "gsap";
function JourneyHero() {
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

    const section = document.getElementById("JourneyHero");
    if (section) {
      observer.observe(section);
    }

    // Add scroll event listener
    const handleScroll = () => {
      if (isVisible && window.scrollY > section?.offsetTop) {
        setHasScrolledDown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]); // Added isVisible to dependencies

  useEffect(() => {
    if (hasScrolledDown) {
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
  return (
    <div
      id="JourneyHero"
      className="py-12 lg:py-28 px-5 lg:px-24 relative overflow-hidden"
    >
      {/* heading */}
      <h1 className="text-lg lg:text-[32px] xl:text-[40px] leading-tight w-[65%] lg:w-[60%] h-[20rem]">
        Change is the only constant truth,{" "}
        {hasScrolledDown && (
          <span className="text-primary-light blue-text">
            riding the wave of change is as complex for marketers as it is for
            consumers,
          </span>
        )}{" "}
        and a determined effort to conquer change led us to pursue Equilibrium
      </h1>
      {/* absolute svg */}
      <div className="absolute left-0 right-0 top-48 md:top-8 lg:top-64 xl:top-[20vh] w-full h-[100vh] z-[10]">
        {hasScrolledDown && (
          <img src={showImage ? "/curveLines.svg" : "/ourjourney.gif"} alt="" className="w-full" />
        )}
        {!hasScrolledDown && (
          <img
            src="/curveLines.svg"
            alt=""
             className="w-full"
            style={{
              clipPath: hasScrolledDown ? "none" : "inset(25% 39%)",
            }}
          />
        )}
      </div>
      {/* paragraph */}
      <div className="flex flex-col lg:flex-row  lg:items-start  lg:justify-end gap-4 lg:gap-24 font-poppins ml-[20%] lg:m-0 lg:w-full mt-32 lg:mt-64 xl:mt-72 text-xs lg:text-lg leading-5 lg:leading-7">
        <p className="font-semibold  lg:w-[20%] ">
          The binding fabric of this change is the human mindset which is ever
          evolving and redefining the status-quo across industries and cultures.
        </p>
        <div className="flex flex-col gap-4 lg:gap-10 lg:w-[40%]">
          <p className="">
            While macro numbers don’t lie, consumers don’t tell the complete
            truth either. Exploring the human behaviour from a holistic angle of
            culture, context, and conscience becomes imperative
          </p>
          <p className="font-semibold">
            Our core belief is that there is no replacement for human
            conversations in any business vertical.{" "}
          </p>
          <p className="hidden xl:block">
            As the consumer sits at the heart of any business, capturing the
            essence of their sentiments is crucial. But, in a world dominated by
            big-data and analytics, the beauty of the insights that lie in human
            conversations and consumer immersions is often forgotten, primarily
            because of the relatively higher resources required for collecting
            and processing such data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JourneyHero;
