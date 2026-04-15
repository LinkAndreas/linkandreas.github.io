import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Navbar, Nav } from "react-bootstrap";

const navItems = [
  { label: "Articles", href: "/articles" },
  { label: "ImgZen", href: "/imgzen" },
  { label: "Licenses", href: "/licenses" },
  { label: "Timity", href: "/timity" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
];

export default function NavBar() {
  const { pathname } = useRouter();

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="md" bg="transparent" variant="dark">
        <Navbar.Brand as={Link} href="/articles">
          Andreas Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {navItems.map(({ label, href }) => (
              <Nav.Link key={href} as={Link} href={href} active={isActive(href)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
