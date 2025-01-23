import React, { useState, useEffect } from "react";
const slides = [
  {
    title: (
      <>
        {`We are `}
        <span className="text-primary-light">{`a tech powered full-${`\n`}service insights agency,`}</span>
        {` rooted in${`\n`}classical principles`}
      </>
    ),
    description: (
      <>
        {`Born from the heart to understand the mind, Equilibrium is a full service
agency, committed to providing clients with agile insights through our
proprietary AI-enhanced SaaS platform`}
      </>
    ),
  },
  {
    title: (
      <>
        {`At the core of any business,${`\n`}`}
        <span className="text-primary-light">{`insights are driven by human${`\n`}conversations and immersions,${`\n`}`}</span>
        {`technology only augments your${`\n`}decision making`}
      </>
    ),
  },
  {
    title: (
      <>
        {`At the core of any business,${`\n`}`}
        <span className="text-primary-light">{`insights are driven by human${`\n`}conversations and immersions,${`\n`}`}</span>
        {`technology only augments your${`\n`}decision making`}
      </>
    ),
    description: (
      <>
        {`Blending conversational and observational insights with other data-${`\n`}points can do wonders for your business. But collecting and processing${`\n`}human insights can be resource intensive`}
        <span className="text-primary-light">
          {` and that’s why to empower${`\n`}your decision-making process, we have two distinct offerings for you…`}
        </span>
      </>
    ),
  },
];

function Start() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="text-left text-[#4A4A4A]">
      <pre className="font-lexend text-[40px] leading-[46.5px]">
        {slides[slide].title}
      </pre>
      <pre className="font-poppins text-[18px] leading-[30px]">
        {slides[slide].description}
      </pre>
    </div>
  );
}

export default Start;
