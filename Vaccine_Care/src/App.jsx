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
import AdminDashboard from "./components/admin/admin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Staff from "./components/admin/staff/Staff";
import Acc_Info from "./components/admin/profile/acc_info";
import { PATH_NAME } from "./constant/pathname";
import Layout_Staff from "./Layout/Layout_Staff/Layout";
import Layout_Doctor from "./Layout/Layout_Doctor/Layout";
import Injection from "./pages/staff/staff1/Injection_infor/Injection";
import Vaccinestaff from "./pages/staff/staff1/Vaccine/Vaccine";
import Vaccine from "./components/admin/vaccine/Vaccine";
import CusPaymentPage from "./Page/Customer/CusPaymentPage/CusPaymentPage";
import VaccineTransactionPage from "./Page/Customer/TransactionPage/TransactionPage";
import Inject_infor from "./pages/staff/staff2/Inject_infor/Inject_infor";
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
      <Route path={PATH_NAME.CAMNANG} element={<MainLayout><CamNangPage /></MainLayout>} />
      <Route path={PATH_NAME.BILLPAYMENT} element={<MainLayout><CusPaymentPage /></MainLayout>} />
      <Route path="/transaction" element={<MainLayout><VaccineTransactionPage /></MainLayout>} />


      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />}>
          <Route path="acc_info" element={<Acc_Info />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="staff" element={<Staff />} />
          <Route path="vaccine" element={<Vaccine />} />
          </Route>
           {/*staff*/}
        <Route element={<Layout_Staff />}>
          <Route path={PATH_NAME.INJECTION} element={<Injection />} />
          <Route path={PATH_NAME.VACCINE} element={<Vaccinestaff />} />
        </Route>

        {/* doctor */}
        <Route element={<Layout_Doctor />}>
          <Route path={PATH_NAME.INJECTION_INFORMATION} element={<Inject_infor />} />
        </Route>
      
      {/* Routes không có Header & Footer */}
      <Route path="/createchild" element={<CreatechildPage />} />
      <Route path="/successregis" element={<SuccessRegis />} />
      <Route path="/successbaby" element={<SuccesCreateprofile />} />
      <Route path="/successbooking" element={<SuccesBooking />} />
    </Routes>
  );
};

export default App;
