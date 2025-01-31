import React from "react";

function JourneyPassion() {
  return (
    <div
      id="JourneyPassion"
      className="px-5 py-12 md:px-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24"
    >
      <h2 className="text-lg lg:text-[40px] leading-tight  w-full order-2 lg:order-1 lg:col-span-2">
        Passionate about exploring human insights,{" "}
        <span className="text-primary-light">
          dispassionate about your business,
        </span>{" "}
        the founder’s equation for Equilibrium
      </h2>
      <div className=" overflow-hidden inset-0 bg-[url('/dot-grid-spacing.svg')] bg-contain bg-repeat  bg-secondary-cream flex items-center justify-center lg:justify-center    order-1 relative min-h-[150px] md:min-h-[300px]">
        <img src="/scopesearch3.gif" alt="" className="w-[50%] lg:w-[70%]" />
      </div>
      <div className="flex flex-col gap-5 font-poppins text-xs lg:text-lg order-3">
        <p className="">
          A journey that began in the discipline of qualitative research,
          Ameya’s career has spanned leadership roles across advertising,
          marketing, and research, earning accolades from clients as well as
          international juries evaluating effectiveness case studies
        </p>
        <p className="">
          Collaborating with clients across sectors such as BFSI, CPG, consumer
          electronics, automotive, media, and fashion & apparel, among others,
          one constant throughout this journey has been a deep passion for a
          ground-up approach to understanding consumer preferences and
          psychology
        </p>
        <p className="">
          Backed by a trifecta of consumer insights, brand strategy, and
          marketing—enriched by life experiences gained through immersion in
          diverse cultures across five continents—Ameya’s next chapter took
          shape with Equilibrium, founded with a vision to democratize not just
          research but the entire marketing funnel
        </p>
      </div>
    </div>
  );
}

export default JourneyPassion;
