import React from "react";
import { Col, Row } from "react-bootstrap";

import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Html from "../../Assets/TechIcons/Html.svg";
import Css from "../../Assets/TechIcons/Css.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" className="tech-img" />
        <p>Java</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="Javascript" className="tech-img" />
        <p>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" className="tech-img" />
        <p>SQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-img" />
        <p>Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" className="tech-img" />
        <p>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="HTML" className="tech-img" />
        <p>HTML</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="CSS" className="tech-img" />
        <p>CSS</p>
      </Col>

    </Row>
  );
}

export default Techstack;