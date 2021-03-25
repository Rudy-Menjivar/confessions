import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBarMember() {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="/member">Welcome "User"</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown.Divider />
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link href="/newsfeed">News Feed</Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link href="/welcome">Log out</Nav.Link>
                    <NavDropdown.Divider />
                    <NavDropdown title="Confession Topics" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Crushes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">School</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Work</NavDropdown.Item>
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

export default NavBarMember;
