import React from "react";

function MarketSection() {
  return (
    <div className="w-full py-32 relative flex items-center justify-between">
      <div className="">
        <img src="/lmap.svg" alt="" className="" />
      </div>
      <div className="max-w-2xl flex flex-col gap-7">
        <h2 className="text-[40px]  leading-[46px]">
          Leave no market untapped,{" "}
          <span className="text-primary-light">seamlessly execute multi-country projects,</span>{" "}
          by tapping into our global network of partner agencies and researchers
        </h2>
        <p className="text-lg font-poppins leading-tight">
          We are building our network one step at a time to ensure that your
          time is dedicated to doing what you do best – making strategic
          business decisions basis data and insights
        </p>
      </div>
      <div className="">
        <img src="/rmap.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default MarketSection;
