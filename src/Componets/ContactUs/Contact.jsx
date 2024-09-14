import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for basic styling

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 4rem;
  background: #f9f9f9; /* Light background color */
  color: #333; /* Dark text color for contrast */
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 40rem;
  background: #fff; /* White background for the form */
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const FormControl = styled.input`
  border: 1px solid #ddd; /* Light grey border for inputs */
  border-radius: 0.5rem;
  padding: 0.75rem;
  width: 100%;
  margin-bottom: 1rem;
  background: #f9f9f9; /* Light background for inputs */
  color: #333; /* Dark text color for inputs */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff; /* Blue border for focus effect */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const FormTextarea = styled.textarea`
  border: 1px solid #ddd; /* Light grey border for textarea */
  border-radius: 0.5rem;
  padding: 0.75rem;
  width: 100%;
  margin-bottom: 1rem;
  background: #f9f9f9; /* Light background for textarea */
  color: #333; /* Dark text color for textarea */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff; /* Blue border for focus effect */
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff; /* Blue button */
  color: #fff; /* White text color */
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #343a40;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const LeadText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
`;

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
    <ContactSection id="ContactPage">
      <div id="contact" className="text-center">
        <Title className="display-4 mb-4">Contact Me</Title>
        <LeadText>
          Please fill out the form below to discuss any work opportunities.
        </LeadText>
        <ContactForm onSubmit={handleSubmit}>
          <div className="form-group">
            <FormControl
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="form-group">
            <FormControl
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="form-group">
            <FormTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter Your Message"
              required
            ></FormTextarea>
          </div>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ContactForm>
        <div className="socialLink mt-4"></div>
      </div>
    </ContactSection>
  );
};

export default Contact;
