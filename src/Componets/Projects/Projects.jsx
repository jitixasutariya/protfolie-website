// src/components/Projects.js
import React, { useState } from "react";
import styled from "styled-components";
import { projects as allProjects } from "../Projects/ProjectData"; // Adjust the path if necessary

// Styled components
const Section = styled.section`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #343a40;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: 1.25rem;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  border: 2px solid #28a745;
  color: #28a745;
  background-color: transparent;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  text-transform: uppercase;

  &:hover {
    background-color: #28a745;
    color: #fff;
    border-color: #28a745;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.4);
  }

  &:disabled {
    background-color: #e9ecef;
    color: #6c757d;
    border-color: #e9ecef;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

const ResponsiveProjectImage = styled(ProjectImage)`
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleToggleProjects = () => {
    setShowAll((prev) => !prev);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section className="container text-center my-5" id="projects">
      <Title className="display-4 mb-4">My Portfolio</Title>
      <Description>
        Versatile Full-Stack Developer crafting seamless and robust web
        applications with expertise in both front-end and back-end technologies.
      </Description>
      <div className="row">
        {(showAll ? allProjects : allProjects.slice(0, 3)).map(
          (project, index) => (
            <div
              className="col-md-4 col-sm-6 mb-4"
              key={index}
              onClick={() => handleProjectClick(project)}
            >
              <ResponsiveProjectImage
                style={{ backgroundImage: `url(${project.image})` }}
                aria-label={project.altText}
              />
            </div>
          )
        )}
      </div>
      <Button className="btn-lg mt-4" onClick={handleToggleProjects}>
        {showAll ? "Show Less" : "See More"}
      </Button>

      {/* Modal for project details */}
      {selectedProject && (
        <Modal visible={!!selectedProject}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.altText}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            {selectedProject.link && (
              <ProjectLink
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ProjectLink>
            )}
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
