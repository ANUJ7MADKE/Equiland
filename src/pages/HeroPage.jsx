import React, { useState } from "react";

function HeroPage() {
  const [activeTab, setActiveTab] = useState("SaaS Platform");
  return (
    <div className="py-20 px-64   font-lexend w-full ">
      <div className="flex flex-col gap-44 items-center justify-center max-w-5xl mx-auto">
        <div className="flex items-center gap-40 ">
          <div className="w-[250px]">
            <img src="/101.svg" alt="101" className="max-w-none" />
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-[40px] leading-tight">
              At the core of any business,{" "}
              <span className="text-primary-light">
                {" "}
                insights are driven by human conversations and immersions,
              </span>{" "}
              technology only augments your decision making
            </h1>
            <p className=" font-poppins text-lg">
              Blending conversational and observational insights with other
              data- points can do wonders for your business. But collecting and
              processing human insights can be resource intensive{" "}
              <span className="text-primary-light ">
                {" "}
                and that's why to empower your decision-making process, we have
                two distinct offerings for you...
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-20 text-[40px]">
          <div
            className={`cursor-pointer `}
            onClick={() => setActiveTab("SaaS Platform")}
          >
            <h2>SaaS Platform</h2>
            {activeTab === "SaaS Platform" && (
              <div className="h-[5px] bg-[#2ED89F]  w-full mt-2"></div>
            )}
          </div>
          <div
            className={`cursor-pointer `}
            onClick={() => setActiveTab("Insights Agency")}
          >
            <h2>Insights Agency</h2>
            {activeTab === "Insights Agency" && (
              <div className="h-[5px] bg-[#2ED89F]  w-full mt-2"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
