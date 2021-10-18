import React from 'react';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

initializeAuthentication();
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user?.email? <button onClick={logOut}>Log Out</button> : <NavLink to="/login">Login</NavLink> }
                &nbps; <span className="text-white">{user.displayName}</span>
            </nav>
        </div>
    );
};

export default Header;