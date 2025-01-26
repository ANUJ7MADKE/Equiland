import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Our Services",
    path: "/",
  },
  {
    label: "Our Journey",
    path: "/our-journey",
  },
  {
    label: "Our Product",
    path: "#",
  },
  {
    label: "Get In Touch",
    path: "#",
  },
  {
    label: "Join The Network",
    path: "#",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="py-6 lg:py-12 px-5 lg:px-24 flex items-center justify-between ">
      <div className="">
        <img src="/full-logo.svg" alt="Full Logo" />
      </div>
      <div className="items-center gap-14 hidden xl:flex">
        {navLinks.map((navLink, index) => (
          <Link
            to={navLink.path}
            className="text-primary-light font-medium whitespace-nowrap text-base font-poppins"
            key={index}
          >
            {navLink.label}
          </Link>
        ))}
      </div>
      <div className="block xl:hidden">
        <button onClick={() => setIsMenuOpen(true)} className="">
          <FiMenu size={24} />
        </button>
      </div>
      <div
        className={`bg-secondary-cream border w-full p-8 md:w-[500px] h-screen z-30 fixed top-0 right-0 duration-300 ${
          isMenuOpen ? "" : "translate-x-[600%]"
        }`}
      >
        <div className="w-full flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="">
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-8 mt-20">
          {navLinks.map((navLink, index) => (
            <Link
            onClick={()=>setIsMenuOpen(false)}
              to={navLink.path}
              className="text-primary-light font-medium whitespace-nowrap text-base font-poppins"
              key={index}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={`hidden md:block fixed w-full h-screen bg-black opacity-20 z-10 inset-0 duration-300 ${isMenuOpen ?"translate-x-0":"translate-x-[100%]"}`}></div>
    </div>
  );
}

export default Navbar;
