import React from "react";

const navLinks = [
  {
    label: "Our Services",
    section: "SaasSection",
  },
  {
    label: "Our Journey",
    section: ""
  },
  {
    label: "Our Product",
    section: "InsightsSection"
  },
  {
    label: "Get In Touch",
    section: "ContactUsSection"
  },
  {
    label: "Join The Network",
    section: ""
  },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Navbar({ canScroll, SetCanScroll }) {
  return (
    <div className=" py-12 px-24 flex items-center justify-between">
      <div className=""><img src="/full-logo.svg" alt="Full Logo" /></div>
      <div className="flex items-center gap-14">
        {navLinks.map((navLink, index) => (
          <p onClick={() => {scrollToSection(navLink.section); SetCanScroll(true)}} className="text-primary-light font-medium whitespace-nowrap text-base font-poppins cursor-pointer" key={index}>{navLink.label}</p>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
