import React from "react";
import "./Intro.css";
import personImg from "../../assets/img1.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// IconButton component renders a button with an icon and text
const IconButton = () => {
  return (
    <Link to="contact" smooth={true} duration={500}>
      <button className="iconBtn">
        {/* FontAwesome icon for the button, with custom styling */}
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{
            color: "#73ad21", // Icon color
            height: "1.2rem", // Icon height
            objectFit: "cover", // Fit the icon properly
            margin: "0 0.65rem", // Spacing around the icon
          }}
        />
        {/* Button text, styled to be bold */}
        <span className="hireMe" style={{ fontWeight: "bolder" }}>
          Hire Me
        </span>
      </button>
    </Link>
  );
};

// Intro component represents the introduction section of the webpage
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        {/* Greeting text */}
        <span className="hello">Hello,</span>
        {/* Introduction text with developer's name and role */}
        <span className="introText">
          I'm <span className="introName">Jitixa</span>
          <br /> Full-Stack Developer
        </span>
        {/* Brief description of skills and expertise */}
        <p className="introPara">
          I am a versatile Full-Stack Developer skilled in building
          comprehensive <br />
          web applications with expertise in both front-end and back-end
          technologies.
        </p>
        {/* Render the IconButton component */}
        <IconButton />

        {/* Display the developer's image */}
        <img src={personImg} alt="Jitixa" className="selfImg" />
      </div>
    </section>
  );
};

export default Intro;
