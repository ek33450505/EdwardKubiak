import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Nav.Link
              href="https://github.com/ek33450505"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="github-icon"
            >
              <FaGithub size={25} />
            </Nav.Link>
          </Col>
          <Col xs="auto">
            <Nav.Link
              href="https://www.strava.com/athletes/76394967"
              target="_blank"
              rel="noopener noreferrer"
              title="Strava Profile"
              className="strava-icon"
            >
              <img
                src={require("../Images/32.png")}
                alt="Strava Profile"
                height="25"
              />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
