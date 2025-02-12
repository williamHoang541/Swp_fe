import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout"; // Import Layout chính
import HomePage from "./Page/HomePage/HomePage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import LoginPage from "./Page/LoginPage/LoginPage";
import SuccessRegis from "./Page/Success/SuccessRegis/SuccessRegis";
import SuccesCreateprofile from "./Page/Success/SuccesCreateprofile/SuccesCreateprofile";
import SuccesBooking from "./Page/Success/SuccessBooking/SuccessBooking";
import CreatechildPage from "./Page/Customer/CreatechildPage/CreatechildPage";
import BookingPage from "./Page/Customer/BookingPage/BookingPage";
import BillPage from "./Page/Customer/BillPage/BillPage";
import ProfileChildPage from "./Page/Customer/ProfileChildPage/ProfileChildPage";
import VaccinationSchedule from "./Page/Customer/VaccinationSchedule/VaccinationSchedule";
import AboutPage from "./Page/AboutPage/AboutPage";
import VaccinePrice from "./Page/VaccinePrice/VaccinePrice";
import CamNangPage from "./Page/CamNangPage/CamNangPage";
import DetailPage from "./Page/DetailPage/DetailPage";
import VaccineListPage from "./Page/VaccineListPage/VaccineListPage";

const App = () => {
  return (
    <Routes>
      {/* Routes có Header & Footer */}
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/vaccine-list" element={<MainLayout><VaccineListPage /></MainLayout>} />
      <Route path="/vaccine/:id" element={<MainLayout><DetailPage /></MainLayout>} />
      <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />
      <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
      <Route path="/booking" element={<MainLayout><BookingPage /></MainLayout>} />
      <Route path="/bill" element={<MainLayout><BillPage /></MainLayout>} />
      <Route path="/profilechild" element={<MainLayout><ProfileChildPage /></MainLayout>} />
      <Route path="/vaccination" element={<MainLayout><VaccinationSchedule /></MainLayout>} />
      <Route path="/aboutus" element={<MainLayout><AboutPage /></MainLayout>} />
      <Route path="/priceVaccine" element={<MainLayout><VaccinePrice /></MainLayout>} />
      <Route path="/camNang" element={<MainLayout><CamNangPage /></MainLayout>} />

      {/* Routes không có Header & Footer */}
      <Route path="/createchild" element={<CreatechildPage />} />
      <Route path="/successregis" element={<SuccessRegis />} />
      <Route path="/successbaby" element={<SuccesCreateprofile />} />
      <Route path="/successbooking" element={<SuccesBooking />} />
    </Routes>
  );
};

export default App;
