import React from "react";
import "./Skills.css";
import frontEnd from "../../assets/frontend.png";
import backEnd from "../../assets/backend.png";
import integration from "../../assets/integration.png";
import projectMgt from "../../assets/project_manger.png";

// Skills component to showcase the different skills and responsibilities of a full-stack developer
const Skills = () => {
  return (
    <section id="skills">
      {/* Section title */}
      <span className="skillTitle">What I Do</span>

      {/* Section description */}
      <span className="skillDesc">
        A full-stack developer designs and builds both the front-end and
        back-end of web applications, handling everything from user interfaces
        to server-side logic and database management.
      </span>

      {/* Skill bars to display different skill areas */}
      <div className="skillBars">
        {/* Front-End Development Skill */}
        <div className="skillBar">
          <img
            src={frontEnd}
            alt="Front-End Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Front-End Development</h2>
            <p>
              Design and implement responsive, user-friendly interfaces using
              HTML, CSS, and JavaScript to create visually appealing and
              accessible web applications.
            </p>
          </div>
        </div>

        {/* Back-End Development Skill */}
        <div className="skillBar">
          <img
            src={backEnd}
            alt="Back-End Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Back-End Development</h2>
            <p>
              Develop server-side logic, manage databases, and create APIs to
              handle data processing, storage, and communication between
              front-end and back-end.
            </p>
          </div>
        </div>

        {/* Full-Stack Integration Skill */}
        <div className="skillBar">
          <img
            src={integration}
            alt="Full-Stack Integration"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Full-Stack Integration</h2>
            <p>
              Build and integrate complete applications, troubleshoot and debug
              both front-end and back-end issues, and manage code with version
              control tools like Git.
            </p>
          </div>
        </div>

        {/* Other Responsibilities */}
        <div className="skillBar">
          <img
            src={projectMgt}
            alt="Other Responsibilities"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Other Responsibilities</h2>
            <p>
              Collaborate with team members on project management and stay
              updated with the latest technologies and best practices in
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
