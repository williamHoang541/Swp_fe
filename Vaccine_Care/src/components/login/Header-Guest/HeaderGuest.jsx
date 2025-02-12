import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderGuest.css";
import logo_vaccine from '../../../assets/logo_vaccine.png';
import Searchicon from '../../../assets/header/Search-icon.png';

const HeaderGuest = () => {
  // State để kiểm soát trạng thái mở/đóng của drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      {/* Header top tĩnh (có thể giữ nguyên nếu cần) */}
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
          <div className="Header-icon" />
          <div className="Header-symbol" />
        </div>
      </div>

      {/* Phần header chính */}
      <div className="header-content mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="header-logo flex items-center space-x-3">
          <img src={logo_vaccine} alt="Vaxi Logo" className="w-10 h-10" />
        </div>

        {/* Nút hamburger để mở Drawer (chỉ hiển thị trên mobile) */}
        <div className="drawer-toggle" onClick={toggleDrawer}>
          <div className={`hamburger ${isDrawerOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation dạng desktop */}
        <nav className="header-navigation desktop-menu">
          <Link to="/" className="Header-text">Trang chủ</Link>
          <Link to="/Aboutus" className="Header-text hover:underline">Giới thiệu</Link>
          <div className="Header-text header-dropdown relative group">
            <div className="Header-text hover:underline">Vắc xin trẻ em</div>
            <div className="dropdown-menu hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Loại 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Loại 2</a>
            </div>
          </div>
          <Link to ='/priceVaccine' className="Header-text hover:underline">Bảng giá</Link>
          <Link to='/camNang' className="Header-text hover:underline">Cẩm nang</Link>
          <div className="Header-text hover:underline">Tin tức</div>
          <Link to="/profilechild" className="Header-text hover:underline">Hồ sơ trẻ</Link>
          <Link to="/bill" className="Header-text hover:underline">Hóa đơn</Link>
        </nav>

        {/* Phần bên phải */}
        <div className="header-right-side flex items-center space-x-4">
          <div className="header-search relative">
            <img src={Searchicon} alt="Search" className="w-10 h-10" />
          </div>
          <a href="/register" className="header-register px-4 py-2 bg-teal-700 rounded-full hover:bg-teal-600">Đăng ký</a>
          <a href="/login" className="header-login px-4 py-2 bg-teal-700 rounded-full hover:bg-teal-600">Đăng nhập</a>
        </div>
      </div>

      {/* Drawer Navigation dành cho mobile */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <nav className="drawer-navigation">
          <Link to="/home" className="drawer-link" onClick={toggleDrawer}>Trang chủ</Link>
          <Link to="/Aboutus" className="drawer-link" onClick={toggleDrawer}>Giới thiệu</Link>
          <div className="drawer-dropdown">
            <div className="drawer-link">Vắc xin trẻ em</div>
            <div className="drawer-dropdown-menu">
              <a href="#" className="drawer-sublink" onClick={toggleDrawer}>Loại 1</a>
              <a href="#" className="drawer-sublink" onClick={toggleDrawer}>Loại 2</a>
            </div>
          </div>
          <a href="#" className="drawer-link" onClick={toggleDrawer}>Bảng giá</a>
          <a href="#" className="drawer-link" onClick={toggleDrawer}>Cẩm nang</a>
          <a href="#" className="drawer-link" onClick={toggleDrawer}>Tin tức</a>
          <Link to="/profilechild" className="drawer-link" onClick={toggleDrawer}>Hồ sơ trẻ</Link>
          <Link to="/bill" className="drawer-link" onClick={toggleDrawer}>Hóa đơn</Link>
          <a href="/register" className="drawer-link" onClick={toggleDrawer}>Đăng ký</a>
          <a href="/login" className="drawer-link" onClick={toggleDrawer}>Đăng nhập</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderGuest;
