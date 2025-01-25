import React from "react";
import { FiArrowRight } from "react-icons/fi";

function ContactUsSection() {
  return (
    <div className="pt-16 pb-32 px-24">
      <h2 className="text-[40px] leading-[46px]">
        We are just getting started,{" "}
        <span className="text-primary-light">
          get in touch to explore <br /> collaboration opportunities
        </span>{" "}
        on a journey together on your <br /> next{" "}
        <span className="text-[#2ED89F]">marketing</span> change
      </h2>
      <div className="mt-20 flex items-center justify-between gap-44">
        <form className="flex-1 flex flex-col gap-12">
          <input
            type="text"
            className="w-full border-b border-text-brownish bg-secondary-cream p-2 text-lg placeholder:text-primary-light placeholder:text-lg focus:outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full border-b border-text-brownish bg-secondary-cream p-2 text-lg placeholder:text-primary-light placeholder:text-lg focus:outline-none"
            placeholder="Email ID"
          />
          <input
            type="number"
            className="w-full border-b border-text-brownish bg-secondary-cream p-2 text-lg placeholder:text-primary-light placeholder:text-lg focus:outline-none"
            placeholder="Contact No."
          />
          <div className="border-b border-text-brownish">
            <textarea
              type="text-area"
              className="w-full  bg-secondary-cream p-2 text-lg placeholder:text-primary-light placeholder:text-lg focus:outline-none"
              placeholder="Leave us a message or upload a written brief"
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-[#2ED89F] text-secondary-cream w-[72px] h-[72px] rounded-full flex items-center justify-center text-4xl">
              <FiArrowRight />
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-2 items-center justify-center">
          <h4 className="text-gray-600">or</h4>
          <div className="h-32 w-[1px] bg-gray-300"></div>
        </div>

        <button className="flex flex-col items-center justify-center gap-3 mr-24">
          <img src="/notebook.svg" alt="" className="" />
          <a href="#" className="underline">
            Fill out our guided <br /> research brief
          </a>
        </button>
      </div>
    </div>
  );
}

export default ContactUsSection;
