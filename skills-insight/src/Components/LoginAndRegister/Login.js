import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    return (
        <div className='mx-auto mt-5 flex justify-content-center'>
            <h2 className='text-center'> Please Login </h2>
            <Form className='w-50 mt-5 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='name' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>

            <p className=' mt-5 text-center'>Don't have an account? <Link to="/register">Register</Link> </p>
            <div>

            </div>
        </div>
    );
};

export default Login;