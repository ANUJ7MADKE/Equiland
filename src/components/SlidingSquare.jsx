import React, { useState } from "react";

const SlidingSquare = ({primaryHeading,secondaryHeading,secondaryText}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-square bg-primary-dark overflow-hidden p-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-secondary-cream text-3xl">Primary Heading</h1>
      <div
        className={`absolute inset-0 bg-[url('/dot-grid.svg')] bg-contain bg-repeat flex flex-col justify-between bg-secondary-cream p-5 text-text-brownish transition-transform duration-500  ${
          hovered ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-lg font-semibold">Smaller Heading</h2>
        <p className="text-sm leading-[30px] font-poppins">This is a description at the bottom.</p>
      </div>
    </div>
  );
};

export default SlidingSquare;
