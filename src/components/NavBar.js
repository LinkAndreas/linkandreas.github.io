import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
            <Nav.Link className="navbar-item" as={NavLink} exact to="/">
              Articles
            </Nav.Link>
            <Nav.Link className="navbar-item" as={NavLink} to="/timity">
              Timity
            </Nav.Link>
            <Nav.Link className="navbar-item" as={NavLink} to="/publications">
              Publications
            </Nav.Link>
            <Nav.Link className="navbar-item" as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
