import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import SidebarAdmin from './sidebar_admin/SidebarAdmin';
import './admin.css';

const AdminDashboard = () => {
    return (
        <div className="admin-container">
            <Header />
            <div className="content-wrapper">
                <SidebarAdmin />
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
