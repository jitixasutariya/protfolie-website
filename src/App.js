import React from "react";
import NavBar from "./Componets/NavBar/NavBar";
import Intro from "./Componets/Intro/Intro";
import Skills from "./Componets/Skills/Skills";
import Projects from "./Componets/Projects/Projects";
import Contact from "./Componets/ContactUs/Contact";
import Footer from "./Componets/Footer/Footer";

// Main App component that serves as the root of the application
function App() {
  return (
    <div className="App">
      {/* Navigation Bar Component */}
      <NavBar />

      {/* Introductory Section Component */}
      <Intro />

      {/* Skills Section Component */}
      <Skills />

      {/* Projects Section Component */}
      <Projects />

      {/* Contact Us Section Component */}
      <Contact />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
