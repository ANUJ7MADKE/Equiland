import React from "react";

function Footer() {
  return (
    <div className="px-24 py-28 bg-primary-dark flex items-start gap-44 text-secondary-cream">
      <div className="">
        <img src="/logo-subheading.svg" alt="" className="" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex gap-24">
          <h3 className="text-primary-light text-lg min-w-36">Quick Links</h3>
          <div className="grid grid-cols-3 gap-x-20 gap-y-8 text-sm">
            {[
              "Home",
              "Our Product",
              "Our Services",
              "Get In Touch",
              "Our Journey",
              "Join The Network",
            ].map((link, index) => (
              <a href="#" key={index} className="font-light font-poppins">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-24">
          <h3 className="text-primary-light text-lg min-w-36">Reach Us</h3>
          <div className="grid grid-cols-3 gap-x-20 gap-y-8 text-sm">
            {["ameya@equilibrium.net", "+91 98203 81508"].map((link, index) => (
              <a href="#" key={index} className="font-light font-poppins">
                {link}
              </a>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Footer;
