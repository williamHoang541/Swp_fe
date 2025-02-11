import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import AdminDashboard from "./components/admin/admin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Staff from "./components/admin/staff/Staff";
import Vaccine from "./components/admin/vaccine/Vaccine";
import Acc_Info from "./components/admin/profile/acc_info";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="acc_info" element={<Acc_Info />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="staff" element={<Staff />} />
          <Route path="vaccine" element={<Vaccine />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
