import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// Styled components
const Navbar = styled.nav`
  background-color: #343a40;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  object-fit: cover;
  width: 100px;
  height: auto;
  border: 3px solid #73ad21;
  padding: 10px;
  border-radius: 50%;
  margin: 1rem;
`;

const NavLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0 0.75rem;
  color: #fff;
  font-size: 1rem;
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
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #495057;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const SocialMediaIcon = styled.a`
  color: #fff;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
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

  useEffect(() => {
    // Set initial active section to "intro"
    setActiveSection("intro");
  }, []);

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Logo src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
