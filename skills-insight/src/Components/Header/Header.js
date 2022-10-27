import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import './Header.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.error('error', error) })
    }
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
                        <Nav.Link>

                        </Nav.Link>
                        {
                            user?.photoURL ? <Button variant="outline-info mx-5 mr-5"><Link className='text-decoration-none text-white' onClick={handleLogout}>Log out</Link></Button> : <Button variant="outline-info mx-5 mr-5"><Link className='text-decoration-none text-white' to="/login">Log in</Link></Button>
                        }

                        {/* <Button variant="outline-info mx-5"><Link className='text-decoration-none text-white' to="/login">Log out</Link></Button> */}
                        <Nav.Link className='mx-5 d-flex justify-content-end align-items-center gap-2'>
                            <div>
                                {user?.photoURL ?
                                    <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image> :
                                    <FaUserCircle></FaUserCircle>
                                }
                            </div>
                            <div>
                                {user?.displayName}</div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;