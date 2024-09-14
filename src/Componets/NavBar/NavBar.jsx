import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// Styled components
const Navbar = styled.nav`
  background-color: #343a40;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem; // Adjusted padding
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Logo = styled.img`
  object-fit: cover;
  width: 120px;
  height: auto;
  border: 3px solid #73ad21;
  padding: 10px;
  border-radius: 50%;
  margin: 0.5rem;
  @media (max-width: 768px) {
    width: 100px;
    margin: 0.25rem;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0 0.75rem;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #73ad21;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #73ad21;
    text-decoration: none;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #73ad21;
    font-weight: bold;
  }

  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0.5rem;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #495057;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.25rem; // Adjusted padding
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    margin: 0.5rem;
    flex-direction: row; // Stack icons vertically on small screens
    align-items: center;
  }
`;

const SocialMediaIcon = styled.a`
  color: #fff;
  margin: 0.5rem 0; // Margin adjusted for vertical stacking
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    margin: 0.5rem; // Adjust margin for vertical stacking on small screens
  }
`;

// Toggle Button Styling
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialMediaIcons = () => (
  <SocialMediaContainer>
    <SocialMediaIcon
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn size={30} />
    </SocialMediaIcon>
    <SocialMediaIcon
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={30} />
    </SocialMediaIcon>
  </SocialMediaContainer>
);

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setActiveSection("intro");
  }, []);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo src={logo} alt="Logo" />
        </a>
        <ToggleButton
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </ToggleButton>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <NavItem className={activeSection === "intro" ? "active" : ""}>
              <NavLink
                to="intro"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onSetActive={() => setActiveSection("intro")}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem className={activeSection === "skills" ? "active" : ""}>
              <NavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onSetActive={() => setActiveSection("skills")}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem className={activeSection === "projects" ? "active" : ""}>
              <NavLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onSetActive={() => setActiveSection("projects")}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem className={activeSection === "contact" ? "active" : ""}>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onSetActive={() => setActiveSection("contact")}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </ul>
          <SocialMediaIcons />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
