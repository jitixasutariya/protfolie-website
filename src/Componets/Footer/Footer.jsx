import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Footer.css"; // Importing the CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white d-flex align-items-center justify-content-center">
      {/* Displaying the copyright notice with the year and name */}
      Copyright &#169; 2024 Jitixa Sutariya. All rights reserved.
    </footer>
  );
};

export default Footer;
