import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

// const 

const Register = () => {

    const { createUser, updateProfileUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL)
                console.log(user)
                navigate('/login');
            })
            .catch(error => {
                console.error('error', error);
                setError(error.message);
                toast.error(error.message)

            })


    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='mt-5'>
            <Form onSubmit={handleSubmit} className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter photoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3'>Already have an account? <Link to='/login'>Log in</Link> </p>
            </Form>
        </div>
    );
};

export default Register;