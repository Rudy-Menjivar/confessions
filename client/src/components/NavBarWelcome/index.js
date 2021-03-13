import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


function NavBarWelcome() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Confessions App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown.Divider />
                    <Nav.Link href="/member">Log in</Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                    <NavDropdown.Divider />
                    <NavDropdown title="Search" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Example</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another example</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Some other example</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarWelcome;
