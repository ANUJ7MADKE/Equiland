import React from "react";

function JourneyInfo() {
  return (
    <div className="bg-primary-dark px-5 md:px-24 py-12 lg:py-32 text-secondary-cream font-poppins text-lg ">
      <div className="flex flex-col gap-24  ">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <h2 className="text-lg font-semibold tracking-wide leading-tight">
            Ushering in agility, transparency & accessibility with our{" "}
            {/* <span className="text-primary-light"> */}
              one-of-its-kind SaaS platform
            {/* </span> */}
          </h2>
          <div className="flex flex-col gap-10 text-lg">
            <p className="font-light">
              The Equilibrium journey started in 2023 with a simple mantra of
              trying to find a solve for how can we bring in agility,
              transparency and improved accessibility to the market research and
              consumer insights process, especially in qualitative research
              domain led us to start building our very own, one-of-its kind SaaS
              platform, which acts as an unstructured data pipeline, and much more
            </p>
            <p className="font-light">
              Being mindful of the fact that clients need guidance in the
              insighting process, we chose to continue doing what we do best –
              don our researcher hats and consulting aprons as we cook food for
              your thoughts
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-4 lg:gap-14 lg:items-stretch">
          <img src="/logo-blue-square.svg" className="aspect-square w-[20%]" alt="Logo" />

          <h2 className="text-sm md:text-lg lg:text-[40px]  xl:leading-tight">
            One SaaS platform{" "}
            <span className="text-primary-light">
              streamlining the entire primary research funnel
            </span>{" "}
            adding transparency, quality, and agility to your marketing process
          </h2>
        </div>
      </div>
    </div>
  );
}

export default JourneyInfo;
