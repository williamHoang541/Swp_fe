
import HeaderGuest from "./login/Header-Guest/HeaderGuest";
import FooterGuest from "./login/Footer-Guest/FooterGuest";

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderGuest />
      <main>{children}</main>
      <FooterGuest />
    </div>
  );
};

export default MainLayout;
