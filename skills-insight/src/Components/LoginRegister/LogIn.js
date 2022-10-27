import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle, FaFacebook } from 'react-icons/fa';


const LogIn = () => {



    const { proviederLogin, signIn, faceBookLogin } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        proviederLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('error', error);
            })

    }

    const faceBookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        faceBookLogin(faceBookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('error', error);
            })
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Successfully logged in')
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("error", error)
                setError(error.message);
                toast.error(error.message);
            })
    }

    return (
        <div className='mt-5'>
            <h3 className='text-center text-primary my-5'>Please log in to start your journey with us</h3>
            <Form onSubmit={handleSignIn} className='mx-auto w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <p className='mt-3'>Don't have an account? <Link to='/register'>Register</Link> </p>
            </Form>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                You can also sign in with
                <Button onClick={handleGoogleSignIn} variant="outline-dark"><FaGoogle></FaGoogle></Button>
                or
                <Button onClick={handleFacebookSignIn} variant="outline-dark"><FaFacebook></FaFacebook></Button>
            </div>
        </div>
    );
};

export default LogIn;