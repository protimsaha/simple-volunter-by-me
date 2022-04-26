import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container row my-4'>
            <div className="logo col-md-6">
                <img src='https://i.ibb.co/fGBqJhx/Group-1329.png' alt="" />
            </div>
            <div className="nav-link col-md-6">
                <Link to='/'>Home</Link>
                <Link to='/donation'>Donation</Link>
                <Link to='/event'>Event</Link>
                <Link to='/blog'>Blog</Link>
                <Link id='login' to='login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;