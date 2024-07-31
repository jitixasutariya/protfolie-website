import React from "react";
import personImg from "../../assets/img1.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Intro.css";

// Component for the 'Hire Me' button
const IconButton = () => {
  return (
    <Link to="contact" smooth={true} duration={500}>
      <button className="btn btn-outline-success d-flex align-items-center">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="me-2"
          style={{ height: "1.4rem" }}
        />
        <span className="fw-bold">Hire Me</span>
      </button>
    </Link>
  );
};

// Main Intro component
const Intro = () => {
  return (
    <section id="intro" className="container py-5">
      <div className="row align-items-center">
        {/* Left column with text content */}
        <div className="col-md-6 text-center text-md-start">
          <div className="introContent">
            <span className="d-block h4">Hello,</span>
            <span className="d-block h2">
              I'm <span className="text-success">Jitixa</span>
              <br /> Full-Stack Developer
            </span>
            <p className="lead my-3">
              I am a versatile Full-Stack Developer skilled in building
              comprehensive web applications with expertise in both front-end
              and back-end technologies.
            </p>
            {/* Render the IconButton component */}
            <IconButton />
          </div>
        </div>
        {/* Right column with image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={personImg}
            alt="Jitixa"
            className="rounded-circle border border-success img-fluid"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
