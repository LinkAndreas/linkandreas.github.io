import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="md" bg="transparent" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          Andreas Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <LinkContainer exact to="/articles">
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>{" "} */}
            <LinkContainer exact to="/">
              <Nav.Link>Timity</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/publications">
              <Nav.Link>Publications</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
