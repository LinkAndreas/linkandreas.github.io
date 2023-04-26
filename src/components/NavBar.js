import React from "react";
import Link from 'next/link';
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="md" bg="transparent" variant="dark">
        <Navbar.Brand as={Link} href="/articles">
          Andreas Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} href="/articles">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} href="/licenses">
              Licenses
            </Nav.Link>
            <Nav.Link as={Link} href="/timity">
              Timity
            </Nav.Link>
            <Nav.Link as={Link} href="/publications">
              Publications
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
