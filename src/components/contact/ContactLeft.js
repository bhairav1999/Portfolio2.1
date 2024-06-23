import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Bhairav karande</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a skilled React JS and frontend developer, I have hands on experience of devloping dynamic, responsive web interfaces using component-based architecture. My expertise in HTML, CSS, and JavaScript ensures high-performance applications with seamless user experiences. Explore my portfolio to see innovative projects that blend visual appeal with functionality.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"> <a href="tel:+919096310806">+91 9096310806</a> </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText" mailTo=""><a href="mailto:bhairavkarande007@gmail.com">bhairavkarande007@gmail.com</a></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
}

export default ContactLeft