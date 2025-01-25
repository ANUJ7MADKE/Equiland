import React from "react";
import SlidingSquare from "../components/SlidingSquare";

function InsightsGrid() {
  return (
    <div className="min-h-screen w-full py-32 px-24 ">
      {/* heading and paragraph */}
      <div className="">
        <h2 className="text-[40px] leading-tight">
          Industry-agnostic insighting services{" "}
          <span className="text-primary-light">
            designed for B2C, B2B, and D2C organisations
          </span>{" "}
          to demystify macro trends
        </h2>
        <p className="font-poppins text-lg mt-5">
          Rooted in classical business and research principles, we design every
          project with a blend of methodologies, but customize the approach to
          best-fit your unique business needs. A glimpse at the list of endless
          use-cases.
        </p>
      </div>
      {/* grid */}
      <div className="grid grid-cols-4 mt-16">
        <SlidingSquare/>
      </div>
      {/* tabs */}
      <div className=""></div>
    </div>
  );
}

export default InsightsGrid;
