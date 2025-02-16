import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../src/context/AuthContext"; // Kiểm tra đường dẫn đúng
import { Link, useNavigate } from "react-router-dom";
import "./HeaderGuest.css";
import logo_vaccine from '../../../assets/logo_vaccine.png';
import Searchicon from '../../../assets/header/Search-icon.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
const HeaderGuest = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <header>
      <div className="Header-main-container">
        <div className="Header-iconContainer">
          <div className="Header-symbol-1" />
          <div className="Header-symbol-2" />
          <div className="Header-symbol-3" />
          <div className="Header-symbol-4" />
        </div>
        <div className="Header-localtion">
          <span className="Header-dai-hoc-fpt-quan">Đại Học FPT Quận 9</span>
          <span className="Header-phone-number">0374277590</span>
        </div>
      </div>

      <div className="header-content mx-auto flex items-center justify-between">
        <div className="header-logo flex items-center space-x-3">
          <img src={logo_vaccine} alt="Vaxi Logo" className="w-10 h-10" />
        </div>

        <nav className="header-navigation desktop-menu">
          <Link to="/" className="Header-text">Trang chủ</Link>
          <Link to="/Aboutus" className="Header-text hover:underline">Giới thiệu</Link>
          <Link to="/Aboutus" className="Header-text hover:underline">Vắc xin trẻ em</Link>
          <Link to="/priceVaccine" className="Header-text hover:underline">Bảng giá</Link>
          <Link to="/camNang" className="Header-text hover:underline">Cẩm nang</Link>
          <Link to="/camNang" className="Header-text hover:underline">Tin tức</Link>
          {isLoggedIn ? (
            <div className="HeaderG-flex2">
 <Link to="/profilechild" className="Header-text hover:underline">Hồ sơ trẻ</Link>
 <Link to="/bill" className="Header-text hover:underline">Hóa đơn</Link>
            </div>
         
        ) : (
<div></div>
        )}
        </nav>

        <div className="header-right-side flex items-center space-x-4">
          <div className="header-search relative">
            <img src={Searchicon} alt="Search" className="w-10 h-10" />
          </div>
          {isLoggedIn ? (
            <div className="header-flex"> 

            <Link to='/createchild' className="header-createChild ">
              Tạo Hồ sơ 
            </Link>
            <div className="dropdown">
      <i
        className="bi bi-bell-fill header-logout-icon "
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ fontSize: "24px", cursor: "pointer" }}
      ></i>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a className="dropdown-item" href="#">🔔 Thông báo 1</a></li>
        <li><a className="dropdown-item" href="#">🔔 Thông báo 2</a></li>
        <li><a className="dropdown-item" href="#">🔔 Xem tất cả</a></li>
      </ul>
    </div>
            <i className="bi bi-box-arrow-in-right header-logout-icon" onClick={handleLogout}></i>
            </div>

          ) : (
            <>
              <Link to="/register" className="header-register ">
                Đăng ký
              </Link>
              <Link to="/login" className="header-login ">
                Đăng nhập
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Drawer Navigation dành cho mobile */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <nav className="drawer-navigation">
          <Link to="/" className="drawer-link" onClick={toggleDrawer}>Trang chủ</Link>
          <Link to="/Aboutus" className="drawer-link" onClick={toggleDrawer}>Giới thiệu</Link>
          <Link to="/priceVaccine" className="drawer-link" onClick={toggleDrawer}>Bảng giá</Link>
          <Link to="/camNang" className="drawer-link" onClick={toggleDrawer}>Cẩm nang</Link>
          <Link to="/profilechild" className="drawer-link" onClick={toggleDrawer}>Hồ sơ trẻ</Link>
          <Link to="/bill" className="drawer-link" onClick={toggleDrawer}>Hóa đơn</Link>
          {isLoggedIn ? (
            <button className="drawer-link text-red-600" onClick={handleLogout}>
              Đăng xuất
            </button>
          ) : (
            <>
              <Link to="/register" className="drawer-link" onClick={toggleDrawer}>Đăng ký</Link>
              <Link to="/login" className="drawer-link" onClick={toggleDrawer}>Đăng nhập</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderGuest;

