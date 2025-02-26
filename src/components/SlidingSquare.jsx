import React, { useState } from "react";

const SlidingSquare = ({ heading, text, colSpan, rowSpan }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative w-full ${
        colSpan === 1 && rowSpan == 1 && "aspect-square"
      } bg-primary-dark overflow-hidden p-5`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridRow: `span ${rowSpan} / span ${rowSpan}`,
        gridColumn: `span ${colSpan} / span ${colSpan}`,
      }}
    >
      <h1 className="text-secondary-cream text-3xl">{heading}</h1>
      <div
        className={`absolute overflow-hidden inset-0 bg-[url('/dot-grid.svg')] bg-contain bg-repeat flex flex-col justify-between bg-secondary-cream p-5 text-text-brownish transition-transform duration-500  ${
          hovered ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p className="text-sm leading-[30px] font-poppins">{text}</p>
      </div>
    </div>
  );
};

export default SlidingSquare;
