import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between"
    >
      {/* Left Side Experience */}
      <div className="w-full lg:w-1/2">
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="Crescendo Worldwide Pvt. Ltd. - (2023 - Present)"
            result="PUNE"
            des="Collaborated on captivating ReactJS based user interfaces using HTML, CSS, and JavaScript.
Applied Redux for seamless user experience and precise state management. Implemented
responsive web designs for optimal performance across devices and screen sizes.
Contributed to new feature development, ensuring alignment with project requirements and deadlines.
Worked closely with UX/UI designers to translate wireframes and mockups into functional web interfaces.
Integrated RESTful APIs for efficient communication between frontend components."
          />
        </div>
      </div>

      {/* Right Side Experience */}
      <div className="w-full lg:w-1/2">
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer"
            subTitle="ANG SOFTWARE (MAR 21 - APR 23)"
            result="PUNE"
            des="I analyze business requirements and translate them into interactive and responsive web applications using HTML5, CSS3, JavaScript, and React.js.
Ensured Optimal user experiences by implementing responsive design principles, making websites accessible across various devices and screen sizes.
Ensured cross-browser compatibility to guarantee a seamless user experience across different browsers, maintaining a consistent and polished look."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
