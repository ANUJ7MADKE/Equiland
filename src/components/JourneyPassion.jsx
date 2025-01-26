import React from "react";

function JourneyPassion() {
  return (
    <div className="px-5 py-12 md:px-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
      <h2 className="text-lg lg:text-[40px] leading-tight  w-full order-2 lg:order-1 lg:col-span-2">
        Industry-agnostic insighting services{" "}
        <span className="text-primary-light">
          designed for B2C, B2B, and D2C organisations
        </span>{" "}
        to demystify macro trends
      </h2>
      <div className="flex items-center justify-start lg:justify-center p-8  bg-[url('/dot-grid.svg')] bg-contain bg-repeat order-1">
        <img src="/glass.svg" alt="" className="w-[40%] lg:w-[50%]" />
      </div>
      <div className="flex flex-col gap-5 font-poppins text-xs lg:text-lg order-3">
        <p className="">
          A journey that started in the discipline of qualitative research,
          Ameya’s career traversed through leadership roles in advertising,
          marketing, and research domains, earning accolades from clients as
          well as international juries judging effectiveness case studies
        </p>
        <p className="">
          Collaborating with clients across sectors such as BFSI, CPG, consumer
          electronics, auto, media, and fashion & apparel, among others, what
          remained unchanged in this journey was the passion for a ground-up
          approach of understanding consumer preferences and psychology
        </p>
        <p className="">
            Backed by this trifecta of consumer insights, brand strategy, and
          marketing – seasoned with life-experiences gained through immersing in
          various cultures across 5 continents – Ameya’s next change came in the
          form of Equilibrium, created with a vision to democratize not only
          research but also the marketing funnel
        </p>
      </div>
    </div>
  );
}

export default JourneyPassion;
