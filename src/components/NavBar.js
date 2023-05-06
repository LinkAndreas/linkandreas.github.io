import React from "react";
import Link from 'next/link';
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="md" bg="transparent" variant="dark">
        <Navbar.Brand as={Link} href="https://linkandreas.de/articles">
          Andreas Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="https://linkandreas.de/articles">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} href="https://linkandreas.de/licenses">
              Licenses
            </Nav.Link>
            <Nav.Link as={Link} href="https://linkandreas.de/timity">
              Timity
            </Nav.Link>
            <Nav.Link as={Link} href="https://linkandreas.de/publications">
              Publications
            </Nav.Link>
            <Nav.Link as={Link} href="https://linkandreas.de/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
