import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import frontEnd from "../../assets/frontend.png";
import backEnd from "../../assets/backend.png";
import integration from "../../assets/integration.png";
import projectMgt from "../../assets/project_manger.png";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="container py-5">
      {/* Section Title */}
      <div className="text-center mb-4">
        <span className="display-4 font-weight-bold">What I Do</span>
      </div>

      {/* Section Description */}
      <div className="text-center mb-5">
        <p className="lead">
          A full-stack developer designs and builds both the front-end and
          back-end of web applications, handling everything from user interfaces
          to server-side logic and database management.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="row">
        {/* Front-End Development */}
        <div className="col-lg-6 mb-4">
          <div className="d-flex bg-dark text-white p-4 rounded" id="skillsImg">
            <img
              src={frontEnd}
              alt="Front-End Development"
              className="img-fluid rounded-circle mr-4"
              style={{ width: "5rem", height: "5rem" }}
            />
            <div>
              <h4>Front-End Development</h4>
              <p>
                Design and implement responsive, user-friendly interfaces using
                HTML, CSS, and JavaScript to create visually appealing and
                accessible web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Back-End Development */}
        <div className="col-lg-6 mb-4">
          <div className="d-flex bg-dark text-white p-4 rounded">
            <img
              src={backEnd}
              alt="Back-End Development"
              className="img-fluid rounded-circle mr-4"
              style={{ width: "5rem", height: "5rem" }}
            />
            <div>
              <h4>Back-End Development</h4>
              <p>
                Develop server-side logic, manage databases, and create APIs to
                handle data processing, storage, and communication between
                front-end and back-end.
              </p>
            </div>
          </div>
        </div>

        {/* Full-Stack Integration */}
        <div className="col-lg-6 mb-4">
          <div className="d-flex bg-dark text-white p-4 rounded">
            <img
              src={integration}
              alt="Full-Stack Integration"
              className="img-fluid rounded-circle mr-4"
              style={{ width: "5rem", height: "5rem" }}
            />
            <div>
              <h4>Full-Stack Integration</h4>
              <p>
                Build and integrate complete applications, troubleshoot and
                debug both front-end and back-end issues, and manage code with
                version control tools like Git.
              </p>
            </div>
          </div>
        </div>

        {/* Other Responsibilities */}
        <div className="col-lg-6 mb-4">
          <div className="d-flex bg-dark text-white p-4 rounded">
            <img
              src={projectMgt}
              alt="Other Responsibilities"
              className="img-fluid rounded-circle mr-4"
              style={{ width: "5rem", height: "5rem" }}
            />
            <div>
              <h4>Other Responsibilities</h4>
              <p>
                Collaborate with team members on project management and stay
                updated with the latest technologies and best practices in
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
