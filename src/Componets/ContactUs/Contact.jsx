import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import "./Contact.css"; // Import custom CSS for additional styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_oru537f", // Replace with your EmailJS service ID
        "template_z9q2fdd", // Replace with your EmailJS template ID
        formData,
        "S5zfmo8XF_kg5EDI5" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="ContactPage"
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
    >
      <div id="Contact" className="text-center">
        <h1 className="display-3 mb-3" style={{ fontWeight: "400" }}>
          Contact Me
        </h1>
        <p className="lead mb-4">
          Please fill out the form below to discuss any work opportunities.
        </p>
        <form onSubmit={handleSubmit} className="w-100 w-md-75 w-lg-50">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-3"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="form-control mb-3"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
        <div className="socialLink mt-4"></div>
      </div>
    </section>
  );
};

export default Contact;
