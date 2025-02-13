import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarAdmin.css'; // Create a separate CSS file for sidebar styles

const SidebarAdmin = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/admin/acc_info" className={location.pathname === '/admin/acc_info' ? 'active' : ''}>
                        <i className="fas fa-user"></i>
                        Acc info
                    </Link>
                </li>
                <li>
                    <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>
                        <i className="fas fa-tachometer-alt"></i>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/staff" className={location.pathname === '/admin/staff' ? 'active' : ''}>
                        <i className="fas fa-users"></i>
                        Nhân viên
                    </Link>
                </li>
                <li>
                    <Link to="/admin/vaccine" className={location.pathname === '/admin/vaccine' ? 'active' : ''}>
                        <i className="fas fa-syringe"></i>
                        Vaccine
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SidebarAdmin;