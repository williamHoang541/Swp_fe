import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderGuest from "../components/login/Header-Guest/HeaderGuest";
import FooterGuest from "../components/login/Footer-Guest/FooterGuest";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/successregis", "/successbaby", "/successbooking"];

  return noHeaderFooterRoutes.includes(location.pathname) ? (
    <Outlet />
  ) : (
    <div>
      <HeaderGuest />
      <Outlet />
      <FooterGuest />
    </div>
  );
};

export default Layout;
