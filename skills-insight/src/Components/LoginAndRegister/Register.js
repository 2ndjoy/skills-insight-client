import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>This is Register</h2>
            <p>Already Have an account? <Link to="/login">Log in</Link> </p>
        </div>
    );
};

export default Register;