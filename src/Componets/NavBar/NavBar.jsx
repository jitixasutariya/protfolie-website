import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.jpg";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopListItem">Home</Link>
        <Link className="desktopListItem">AboutUs</Link>
        <Link className="desktopListItem">Protfolio</Link>
        <Link className="desktopListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopImg" />
        <div class="text">Contact Me</div>
      </button>
    </nav>
  );
};

export default NavBar;
