import React from "react";
import { FiArrowRight } from "react-icons/fi";

function SaaSSection() {
  return (
    <div id="SaasSection" className="pt-32 pl-24 bg-primary-dark text-secondary-cream flex flex-col gap-14">
      <div className="flex gap-14 items-stretch">
        <img src="/logo-blue-square.svg" alt="Logo" />

        <h2 className="text-[40px]  mr-24 leading-tight">
          One SaaS platform{" "}
          <span className="text-primary-light">
            streamlining the entire primary research funnel
          </span>{" "}
          adding transparency, quality, and agility to your marketing process
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-16 w-[30%] font-poppins text-lg ">
          <div className="flex flex-col gap-8 ">
            <p className="tracking-wide">
              Designed to automate and simplify the research infrastructure,
              tools on the EQ platform act as tailwinds propelling the research
              journey – from designing the research objectives to generating the
              output
            </p>
            <p className="tracking-wide">
              Use the EQ platform for DIY research or reach out to Equilibrium
              for 360° services – the choice is yours.
            </p>
          </div>
          <button className="w-fit flex items-center gap-3 font-lexend ">
            <div className={`cursor-pointer `}>
              <h2 className="font-medium whitespace-nowrap">Placeholder know more CTA</h2>
              <div className="h-[1px] bg-secondary-cream  w-full"></div>
            </div>
            <div className="bg-[#2ED89F] w-10 h-10 rounded-full flex items-center justify-center">
              <FiArrowRight className="text-primary-dark text-xl" />
            </div>
          </button>
        </div>
        <div className="w-[60%]">
          <img src="/saas-timeline.svg" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default SaaSSection;
