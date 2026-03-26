import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

          <Col md={8} className="home-about-description">

            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">

              I am <b className="purple">Gokulan M</b>, an aspiring
              <b className="purple"> Java Developer </b>
              currently pursuing B.E Electronics and Communication Engineering.

              <br />
              <br />

              I have hands-on experience in
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, MySQL, HTML, CSS, JavaScript
                </b>
              </i>
              and I enjoy building backend applications and database-driven systems.

              <br />
              <br />

              My main interest is in
              <i>
                <b className="purple">
                  {" "}
                  Backend Development, Web Applications, and Software Design
                </b>
              </i>.

              <br />
              <br />

              I like developing projects using
              <b className="purple"> Java </b>,
              <b className="purple"> Spring Boot </b>,
              and working with databases like
              <b className="purple"> MySQL</b>.

            </p>

          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;