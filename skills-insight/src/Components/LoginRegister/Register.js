import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mt-5'>
            <Form className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-3'>Already have an account? <Link to='/login'>Log in</Link> </p>
            </Form>
        </div>
    );
};

export default Register;