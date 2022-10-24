import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar><Link to='/'>Skills Insight</Link></Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to="/courses">Courses</Link> </Nav.Link>
                        <Nav.Link> <Link to="/blogs">Blogs</Link> </Nav.Link>
                        <Nav.Link> <Link to="/faq">FAQ</Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to="/login">Log in</Link></Nav.Link>
                        <Nav.Link>
                            Dark Mode
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;