import React from "react";
import "./NavBar.css"; // Import the CSS file for styling the NavBar
import logo from "../../assets/logo.jpg"; // Import the logo image for the NavBar
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"; // Import social media icons

// Component for displaying social media icons with links
const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      {/* Facebook Icon with a link to Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={30} />
      </a>
      {/* LinkedIn Icon with a link to LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={30} />
      </a>
      {/* GitHub Icon with a link to GitHub */}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      {/* Instagram Icon with a link to Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

// Main NavBar component
const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo Image - Displays the logo of the website */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Desktop Menu Links - Navigation links for desktop view */}
      <div className="desktopMenu">
        {/* Link to the 'home' section with smooth scrolling */}
        <Link
          className="desktopListItem"
          to="home"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        {/* Link to the 'aboutus' section with smooth scrolling */}
        <Link
          className="desktopListItem"
          to="aboutus"
          smooth={true}
          duration={500}
        >
          About Us
        </Link>
        {/* Link to the 'portfolio' section with smooth scrolling */}
        <Link
          className="desktopListItem"
          to="portfolio"
          smooth={true}
          duration={500}
        >
          Portfolio
        </Link>
        {/* Link to the 'contactus' section with smooth scrolling */}
        <Link
          className="desktopListItem"
          to="contactus"
          smooth={true}
          duration={500}
        >
          Contact Us
        </Link>
      </div>

      {/* SocialMediaIcons - Component that displays social media icons */}
      <SocialMediaIcons />
    </nav>
  );
};

export default NavBar;
