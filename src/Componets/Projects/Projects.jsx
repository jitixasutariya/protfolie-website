import React from "react";
import Portfolie1 from "../../assets/portfolio.jpg"; // Import the image asset
import Jewllery_websiteImg from "../../assets/jewellery-website.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Projects.css"; // Import custom CSS for the Projects component

const Projects = () => {
  return (
    <section id="Projects" className="container text-center my-5">
      {/* Section title */}
      <h2 className="display-3 mb-3" style={{ fontWeight: "400" }}>
        My Portfolio
      </h2>

      {/* Description of the portfolio */}
      <p className="lead mb-4">
        Versatile Full-Stack Developer crafting seamless and robust web
        applications with expertise in both front-end and back-end technologies.
      </p>

      {/* Container for project images */}
      <div className="row">
        {/* Map through an array to display multiple project images */}
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <img
              src={Portfolie1}
              alt="Project Thumbnail"
              className="img-fluid rounded dark-border"
            />
          </div>
        ))}
      </div>

      {/* Button to see more projects */}
      <button className="btn btn-outline-success btn-lg mt-4">See More</button>
    </section>
  );
};

export default Projects;
