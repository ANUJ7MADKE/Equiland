import React from "react";

function JourneyHero() {
  return (
    <div className="py-12 lg:py-28 px-5 lg:px-24 relative overflow-hidden">
      {/* heading */}
      <h1 className="text-lg lg:text-[32px] xl:text-[40px] leading-tight w-[65%] lg:w-[60%]">
        Change is the only constant truth,{" "}
        <span className="text-primary-light">
          riding the wave of change is as complex for marketers as it is for
          consumers,
        </span>{" "}
        and a determined effort to conquer change led us to pursue Equilibrium
      </h1>
      {/* absolute svg */}
      <img
        src="/curveLines.svg"
        alt=""
        className="absolute left-0 right-0 top-48 md:top-8 lg:top-64 xl:top-[20vh] w-full"
      />
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
