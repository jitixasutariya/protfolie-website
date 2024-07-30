import React from "react";
import "./Projects.css"; // Import the CSS file for styling
import Portfolie1 from "../../assets/portfolio.jpg"; // Import the image asset

// Projects component definition
const Projects = () => {
  return (
    <section id="Projects">
      {/* Section title */}
      <h2 className="projectTitle">My Portfolio</h2>

      {/* Description of the portfolio */}
      <span className="projectDesc">
        Versatile Full-Stack Developer crafting seamless and robust web
        applications with expertise in both front-end and back-end technologies.
      </span>

      {/* Container for project images */}
      <div className="projectImgs">
        {/* Display multiple project images */}
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
        <img src={Portfolie1} alt="Project Thumbnail" className="projectImg" />
      </div>

      {/* Button to see more projects */}
      <button className="projectBtn">See More</button>
    </section>
  );
};

export default Projects;
