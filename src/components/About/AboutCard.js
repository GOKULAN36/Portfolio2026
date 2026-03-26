import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Gokulan M</span> from{" "}
            <span className="purple">Erode, India</span>.
            <br />
            I’m an aspiring <span className="purple">Java Developer</span> with
            hands-on experience in{" "}
            <span className="purple">
              Java, Spring Boot, MySQL, and Web Technologies
            </span>.
            <br />
            I am currently pursuing{" "}
            <span className="purple">
              B.E Electronics and Communication Engineering
            </span>{" "}
            at <span className="purple">Erode Sengunthar Engineering College</span>.
            <br />
            My CGPA is <span className="purple">7.66</span>.
            <br />
            <br />
            I am interested in backend development, database design,
            and building scalable software solutions.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Java Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Spring Boot & MySQL
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Development (HTML, CSS, JavaScript)
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & DSA
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;