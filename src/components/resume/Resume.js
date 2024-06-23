import React, { useState } from 'react'
import Title from '../layouts/Title';

import Experience from "./Experience"

const Resume = () => {

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="3+ YEARS OF EXPERIENCE" des="Work Experiences" />
      </div>

      <Experience />
    </section>
  );
}

export default Resume