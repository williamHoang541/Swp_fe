import { Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createchild" element={<CreatechildPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bill" element={<BillPage />} />
        <Route path="/profilechild" element={<ProfileChildPage />} />
        <Route path="/Vaccination" element={<VaccinationSchedule />} />
        <Route path="/Aboutus" element={<AboutPage />} />




        {/* success */}
        <Route path="/successregis" element={<SuccessRegis />} />
        <Route path="/successbaby" element={<SuccesCreateprofile />} />
        <Route path="/successbooking" element={<SuccesBooking />} />




      </Routes>
    </div>
  );
};

export default App;
