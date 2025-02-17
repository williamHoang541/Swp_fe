import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/Navbar"; // Admin-specific navbar
import SidebarAdmin from "../components/admin/sidebar_admin/SidebarAdmin";
import "./AdminLayout.css"; // Admin-specific styles

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Fragment>
            <AdminNavbar toggleSidebar={toggleSidebar} />
            <div className={`admin-layout-container ${isCollapsed ? "collapsed" : ""}`}>
                <SidebarAdmin isCollapsed={isCollapsed} />
                <div className="admin-content-outlet">
                    <Outlet />
                </div>
            </div>
        </Fragment>
    );
};

export default AdminLayout;