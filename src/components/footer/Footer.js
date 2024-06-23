import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <img className="w-32" src={logo} alt="logo" />
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
    </div>
  );
}

export default Footer;
