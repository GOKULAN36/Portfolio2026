import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="ms-auto">

            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <AiOutlineUser /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <AiOutlineFundProjectionScreen /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Github button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/GOKULAN36"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork />
                <AiFillStar />
              </Button>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;