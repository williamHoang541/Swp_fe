import React from 'react';
import './header.css';
import logo from '../../../assets/logo.png'; // Adjust the path as necessary

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">
                <img src={logo} alt="Logo" className="header-logo" />
                Admin
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="icons">
                <div className="notification-bell">
                    <i className="fas fa-bell"></i>
                    <span className="notification-count">3</span>
                </div>
                <div className="profile-picture">
                    <img src="assets/cat.jpg" alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;