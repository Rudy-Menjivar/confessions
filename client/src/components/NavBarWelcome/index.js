import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBarWelcome() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Confessions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown.Divider />
              <Nav.Link href="/login">Log in</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="/signup">Sign up</Nav.Link>
              <NavDropdown.Divider />
            </Nav>
          </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarWelcome;
