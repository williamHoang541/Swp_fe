import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarAdmin.css'; // Create a separate CSS file for sidebar styles

const SidebarAdmin = ({ isCollapsed }) => {
    const location = useLocation();

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <ul>
                <li>
                    <Link to="/admin/acc_info" className={location.pathname === '/admin/acc_info' ? 'active' : ''}>
                        <i className="fas fa-user"></i>
                        {!isCollapsed && "Acc info"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
                        <i className="fas fa-tachometer-alt"></i>
                        {!isCollapsed && "Dashboard"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/staff" className={location.pathname === '/admin/staff' ? 'active' : ''}>
                        <i className="fas fa-users"></i>
                        {!isCollapsed && "Nhân viên"}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/vaccine" className={location.pathname === '/admin/vaccine' ? 'active' : ''}>
                        <i className="fas fa-syringe"></i>
                        {!isCollapsed && "Vaccine"}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarAdmin;