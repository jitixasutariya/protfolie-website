import React from "react";
import "./NavBar.css"; // Import custom CSS for NavBar styling
import logo from "../../assets/logo.jpg"; // Import logo image
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"; // Import social media icons from react-icons

// SocialMediaIcons component
const SocialMediaIcons = () => {
  return (
    <div className="d-flex justify-content-center" style={{ margin: "1rem" }}>
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaFacebook size={30} />
      </a>
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaLinkedinIn size={30} />
      </a>
      {/* GitHub Icon */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaGithub size={30} />
      </a>
      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

// NavBar component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo and brand link */}
        <a className="navbar-brand" href="#intro">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Home link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            {/* About Us link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Us
              </Link>
            </li>
            {/* Portfolio link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            {/* Contact Us link */}
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Social media icons */}
          <SocialMediaIcons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
