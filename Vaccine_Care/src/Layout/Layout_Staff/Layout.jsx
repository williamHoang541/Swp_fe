import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar_staff/Navbar";
import Sidebar from "../../components/Sidebar_staff/Sidebar";
import "./Layout.css";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <Fragment>
      <Navbar toggleSidebar={toggleSidebar} className="layout_manage_navbar" />
      <div className={`layout_container ${isCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar_container">
          <Sidebar isCollapsed={isCollapsed}/>
        </div>
        <div className="content_outlet">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
