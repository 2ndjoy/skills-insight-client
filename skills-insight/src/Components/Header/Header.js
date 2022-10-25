import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar className='fs-4'>
                    <img src={require('./logo.png')} clas />
                    <Link className='text-decoration-none fw-bold' to='/'>Skills Insight</Link></Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5">
                        <Nav.Link> <Link className='text-decoration-none header-style' to="/courses">Courses</Link> </Nav.Link>
                        <Nav.Link> <Link className='text-decoration-none header-style' to="/blogs">Blogs</Link> </Nav.Link>
                        <Nav.Link> <Link className='text-decoration-none header-style' to="/faq">FAQ</Link> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='mx-5'>
                            Dark Mode
                        </Nav.Link>
                        <Button variant="outline-info mx-5"><Link className='text-decoration-none text-white' to="/login">Log in</Link></Button>
                        {/* <Button variant="outline-info mx-5"><Link className='text-decoration-none text-white' to="/login">Log out</Link></Button> */}
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