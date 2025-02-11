import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar_staff/Navbar";
import Sidebar from "../../components/Sidebar_staff/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <Fragment>
      <Navbar className="layout_manage_navbar" />
      <div className="layout_container">
        <div className="sidebar_container">
          <Sidebar />
        </div>
        <div className="content_outlet">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
