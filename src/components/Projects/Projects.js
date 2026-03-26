import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hms from "../../Assets/Projects/hms.png";
import metalrate from "../../Assets/Projects/Metalrate.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metalrate}
              isBlog={false}
              title="Currency Converter with Metal Rate Analyzer"
              description="Developed an application for currency conversion and metal rate analysis using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript."
              ghLink="https://github.com/YOUR_GITHUB"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hms}
              isBlog={false}
              title="Hospital Management System"
              description="Developed a console-based system using Java, JDBC, and MySQL with CRUD operations."
              ghLink="https://github.com/YOUR_GITHUB"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="IoT Water Cleaning Robot"
              description="Designed an IoT-based floating robot using Arduino, motor driver, and Bluetooth control."
              ghLink="https://github.com/YOUR_GITHUB"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;