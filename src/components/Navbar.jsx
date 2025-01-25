import React from "react";

const navLinks = [
  {
    label: "Our Services",
    path: "#",
  },
  {
    label: "Our Journey",
    path: "#",
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
  return (
    <div className=" py-12 px-24 flex items-center justify-between">
      <div className=""><img src="/full-logo.svg" alt="Full Logo" /></div>
      <div className="flex items-center gap-14">
        {navLinks.map((navLink, index) => (
          <a href={navLink.path} className="text-primary-light font-medium whitespace-nowrap text-base font-poppins" key={index}>{navLink.label}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
