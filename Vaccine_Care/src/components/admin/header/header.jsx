import React from 'react';
import './header.css';
import logo from '../../../assets/logo_vaccine.png'; // Adjust the path as necessary
import profileImage from '../../../assets/cat.jpg'; // Ensure this path is correct
import { IoMenuOutline } from "react-icons/io5"; // Import icon

const Header = ({ toggleSidebar }) => { // Nhận toggleSidebar như một prop
    return (
        <div className="header">
            <button className="sidebar-toggle-btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <IoMenuOutline />
            </button>
            <div className="header-title">
                <img src={logo} alt="Logo" className="header-logo" />
                <span className="header-admin-text">Hello, Admin</span>
            </div>
            <div className="header-search-container">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="header-search-input" 
                    aria-label="Search"
                />
            </div>
            <div className="icons">
                <div className="notification-bell" aria-label="Notifications">
                    <i className="fas fa-bell"></i>
                    <span className="notification-count">3</span>
                </div>
                <div className="profile-picture">
                    <img src={profileImage} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;