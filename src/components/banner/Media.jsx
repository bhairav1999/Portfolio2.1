import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiJavascript, SiHtml5 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/bhairavnath.karande.5" className="bannerIcon" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://x.com/karandebhairav?lang=en&mx=2" className="bannerIcon" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/bhairav-karande-793a34271" className="bannerIcon" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiHtml5 />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
