import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", marginTop: "100px" }}>
          <Button
            variant="primary"
            href="/resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp; Download CV
          </Button>
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;