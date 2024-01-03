import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export function BNavbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        props.applyMenuCallBack(!isOpen);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Navigation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/searching">Searching</Nav.Link>
                        <Nav.Link as={NavLink} to="/collection">Collection</Nav.Link>
                        <Nav.Link as={NavLink} to="/cooking">Cooking</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
