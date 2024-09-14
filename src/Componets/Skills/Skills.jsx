import React from "react";
import styled from "styled-components";
import frontEnd from "../../assets/frontend.png";
import backEnd from "../../assets/backend.png";
import integration from "../../assets/integration.png";
import projectMgt from "../../assets/project_manger.png";

// Styled components
const Section = styled.section`
  padding: 5rem 10rem; /* Default padding for large screens */
  background: #f0f4f8;

  @media (max-width: 1200px) {
    padding: 4rem 5rem; /* Padding for medium-sized screens */
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem; /* Padding for small screens */
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem; /* Padding for extra-small screens */
  }
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #343a40;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  p {
    font-size: 1.25rem;
    color: #666;
    margin: 0 auto;
    max-width: 800px; /* Limit the width of the text block */
  }
`;

const SkillCard = styled.div`
  display: flex;
  background: #fff;
  color: #333;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(40, 167, 69, 0.5); /* Adjust the color and opacity of the shadow */
  }
`;

const SkillImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 10%;
  margin-right: 1rem;
`;

const SkillContent = styled.div`
  h4 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
  }
`;

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  gap: 1.5rem; /* Space between skill cards */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* One card per row on small screens */
  }
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Title className="display-4 mb-4">What I Do</Title>

      <Description>
        <p>
          A full-stack developer designs and builds both the front-end and
          back-end of web applications, handling everything from user interfaces
          to server-side logic and database management.
        </p>
      </Description>

      <SkillWrapper>
        <SkillCard>
          <SkillImage src={frontEnd} alt="Front-End Development" />
          <SkillContent>
            <h4>Front-End Development</h4>
            <p>
              Design and implement responsive, user-friendly interfaces using
              HTML, CSS, and JavaScript to create visually appealing and
              accessible web applications.
            </p>
          </SkillContent>
        </SkillCard>

        <SkillCard>
          <SkillImage src={backEnd} alt="Back-End Development" />
          <SkillContent>
            <h4>Back-End Development</h4>
            <p>
              Develop server-side logic, manage databases, and create APIs to
              handle data processing, storage, and communication between
              front-end and back-end.
            </p>
          </SkillContent>
        </SkillCard>

        <SkillCard>
          <SkillImage src={integration} alt="Full-Stack Integration" />
          <SkillContent>
            <h4>Full-Stack Integration</h4>
            <p>
              Build and integrate complete applications, troubleshoot and debug
              both front-end and back-end issues, and manage code with version
              control tools like Git.
            </p>
          </SkillContent>
        </SkillCard>

        <SkillCard>
          <SkillImage src={projectMgt} alt="Other Responsibilities" />
          <SkillContent>
            <h4>Other Responsibilities</h4>
            <p>
              Collaborate with team members on project management and stay
              updated with the latest technologies and best practices in
              development.
            </p>
          </SkillContent>
        </SkillCard>
      </SkillWrapper>
    </Section>
  );
};

export default Skills;
