import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SidebarAdmin.css';
import { FaUser, FaTachometerAlt, FaUsers, FaSyringe } from 'react-icons/fa';

const SidebarAdmin = ({ isCollapsed }) => {
    const location = useLocation();

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <ul>
                <li>
                    <Link to="/admin/acc_info" className={location.pathname === '/admin/acc_info' ? 'active' : ''}>
                        <FaUser className="sidebar-icon" />
                        {!isCollapsed && "Acc info"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
                        <FaTachometerAlt className="sidebar-icon" />
                        {!isCollapsed && "Dashboard"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/staff" className={location.pathname === '/admin/staff' ? 'active' : ''}>
                        <FaUsers className="sidebar-icon" />
                        {!isCollapsed && "Nhân viên"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/vaccine" className={location.pathname === '/admin/vaccine' ? 'active' : ''}>
                        <FaSyringe className="sidebar-icon" />
                        {!isCollapsed && "Vaccine"}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarAdmin;