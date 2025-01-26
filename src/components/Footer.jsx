import React from "react";

function Footer() {
  return (
    <div className="px-5 lg:px-12 xl:px-24 py-12 lg:py-28 bg-primary-dark flex flex-col lg:flex-row items-start gap-12 xl:gap-44 text-secondary-cream">
      <div className="w-full lg:w-fit flex items-center justify-center">
        <img src="/logo-subheading.svg" alt="" className="" />
      </div>
      <div className="flex flex-col gap-10 lg:gap-20 w-full md:w-1/2 md:mx-auto lg:w-fit px-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24">
          <h3 className="text-primary-light text-lg min-w-36">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-2 lg:gap-x-20 lg:gap-y-8 text-sm">
            {[
              "Home",
              "Our Product",
              "Our Services",
              "Get In Touch",
              "Our Journey",
              "Join The Network",
            ].map((link, index) => (
              <a href="#" key={index} className="font-light font-poppins whitespace-nowrap">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24">
          <h3 className="text-primary-light text-lg min-w-36">Reach Us</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-48 gap-y-2 xl:gap-x-20 lg:gap-y-8 text-sm">
            {["ameya@equilibrium.net", "+91 98203 81508"].map((link, index) => (
              <a href="#" key={index} className="font-light font-poppins whitespace-nowrap">
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
