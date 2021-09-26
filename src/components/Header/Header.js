import React from 'react';
import './Header.css';
import logo from '../../images/motivation.jpg';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/councilling">Councilling Time</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;