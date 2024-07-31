import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import "./Contact.css"; // Import custom CSS for additional styling

// Functional component for the Contact page
const Contact = () => {
  return (
    <section
      id="ContactPage" // Unique identifier for the section
      className="d-flex flex-column align-items-center justify-content-center min-vh-100" // Flexbox utilities for centering content
    >
      <div id="Contact" className="text-center">
        {" "}
        {/* Centered text block */}
        <h1 className="display-3 mb-3" style={{ fontWeight: "400" }}>
          Contact Me
        </h1>
        <p className="lead mb-4">
          Please fill out the form below to discuss any work opportunities.
        </p>
        {/* Contact form */}
        <form action="" className="w-100 w-md-75 w-lg-50">
          {" "}
          {/* Responsive width classes */}
          <div className="form-group">
            {" "}
            {/* Form group for name input */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Your Name" // Placeholder text for the input field
            />
          </div>
          <div className="form-group">
            {" "}
            {/* Form group for email input */}
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Your Email" // Placeholder text for the input field
            />
          </div>
          <div className="form-group">
            {" "}
            {/* Form group for message textarea */}
            <textarea
              name="message"
              rows="5" // Number of rows for the textarea
              className="form-control mb-3"
              placeholder="Enter Your Message" // Placeholder text for the textarea
            ></textarea>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
        {/* Placeholder for social media links or additional content */}
        <div className="socialLink mt-4"></div>
      </div>
    </section>
  );
};

export default Contact;
