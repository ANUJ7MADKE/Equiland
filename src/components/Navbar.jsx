import React from "react";
import full_logo from '/full-logo.svg'

function Navbar() {
  return (
    <>
      <img className="w-[158.33px] h-[25px] absolute top-[39px] left-[57px] gap-0px opacity-0px" src={full_logo} alt='Equilibrium' />
      <div className="h-[24px] absolute w-[776px] top-[48px] left-[565px] text-primary-light font-poppins text-[16px] leading-[24px] font-[500] flex justify-between items-center
      ">
        <a href="/services">Our Services</a>
        <a href="/journey">Our Journey</a>
        <a href="/product">Our Product</a>
        <a href="/contact">Get In Touch</a>
        <a href="/network">Join The Network</a>
      </div>
    </>
  );
}

export default Navbar;
