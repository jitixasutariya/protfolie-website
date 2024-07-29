import React from "react";
import "./Intro.css";
import personImg from "../../assets/img1.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// IconButton component renders a button with an icon and text
const IconButton = () => {
  return (
    <Link>
      <button className="iconBtn">
        <FontAwesomeIcon
          icon={faBriefcase}
          style={{
            color: "#73ad21",
            height: "1.2rem",
            objectFit: "cover",
            margin: "0 0.65rem",
          }}
        />
        {/* The "Hire Me" button text, styled to be bold using inline styles */}
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
        <span className="hello">Hello,</span>
        <span className="introText">
          {/* Display the developer's name */}
          I'm <span className="introName">Jitixa</span>
          <br /> Full-Stack Developer
        </span>
        <p className="introPara">
          {/* Brief description of skills and expertise */}
          I am a versatile Full-Stack Developer skilled in building
          comprehensive web applications <br /> with expertise in both front-end
          and back-end technologies.
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
