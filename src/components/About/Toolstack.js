import React from "react";
import { Col, Row } from "react-bootstrap";

import Postman from "../../Assets/TechIcons/Postman.svg";
import Vscode from "../../Assets/TechIcons/Vscode.svg";
import Intellij from "../../Assets/TechIcons/Intellij-idea.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-img" />
        <p>Postman</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Vscode} alt="VS Code" className="tech-img" />
        <p>VS Code</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Intellij} alt="IntelliJ" className="tech-img" />
        <p>IntelliJ</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-img" />
        <p>Git</p>
      </Col>

    </Row>
  );
}

export default Toolstack;