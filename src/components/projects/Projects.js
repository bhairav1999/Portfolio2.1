import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="COMFY STORE"
          des="Developed fully functional Ecommerce platform using ReactJS with integration of the Daisy UI component library, which is built on Tailwind CSS. Implemented React Router v6.15, enabling seamless navigation. Incorporated sorting, filtering, pagination, and authentication to enhance user experience. "
          src={projectOne}
          github="https://github.com/bhairav1999/comfy-store.git"
          url="https://bhairav-comfy.netlify.app/"
        />
        <ProjectsCard
          title="YOUTUBE CLONE"
          des="Developed a full-fledged YouTube clone by harnessing the power of RapidAPI for seamless data integration. Implemented the project using ReactJS with reusable components and required libraries. Utilized Redux for efficient state management, ensuring a smooth and organized flow of data within the application"
          src={projectTwo}
          github="https://github.com/bhairav1999/Youtube-Clone.git"
          url="https://bhairav-youtube.netlify.app/"
        />
        <ProjectsCard
          title="UNSPPLASH IMAGES"
          des="I developed an image gallery application using React JS, HTML, CSS, and JavaScript, integrating Unsplash API for high-quality images. The app features search, filter functionalities, ensuring a seamless and user-friendly browsing experience."
          src={projectThree}
          github="https://github.com/bhairav1999/Unsplash-Images.git"
          url="https://stalwart-chimera-cbbabd.netlify.app/"
        />
        <ProjectsCard
          title="WEATHER APP"
          des="I created a weather app using HTML, CSS, and JavaScript. This project fetches real-time weather data from an API and displays it in a user-friendly interface. The app allows users to search for any city and view current weather conditions, including temperature, humidity, and wind speed, all presented with a clean and responsive design."
          src={projectFour}
          github="https://github.com/bhairav1999/Weather-App-Js-Project-1.git"
          url="https://bhairav-js-weather-app.netlify.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="I developed an e-commerce website using React JS, HTML, CSS, and JavaScript. This project includes pagination, search, and filter functionalities, allowing users to easily browse and find products. The responsive design ensures a seamless shopping experience across all devices."
          src={projectFive}
          github="https://github.com/bhairav1999/Pagination-React-9.git"
          url="https://bhairav-react-pagination.netlify.app/"
        />
        <ProjectsCard
          title="TO-DO-LIST"
          des="I created a dynamic Todo List application using React JS, HTML, CSS, and JavaScript. This project features functionalities for adding, editing, and deleting tasks, with a responsive design for an optimal user experience across all devices."
          src={projectSix}
          github="https://github.com/bhairav1999/ToDo-List_React-11.git"
          url="https://bhairav-react-todo-list.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects