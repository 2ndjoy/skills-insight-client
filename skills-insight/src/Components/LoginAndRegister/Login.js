import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>This is login</h2>
            <p>Don't have an account? <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Login;