import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email"/> <br/>
                    <input type="password" placeholder="password"/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>New to ema-john <Link to="/register">Create Account</Link> </p>
                <div>------------ or --------------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;