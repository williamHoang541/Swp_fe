import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { PATH_NAME } from "./constant/pathname";
import Layout from "./Layout/Layout_Staff/Layout";
import Injection from "./pages/staff/staff1/Injection_infor/Injection";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        {/*staff*/}
        <Route element={<Layout />}>
          <Route path={PATH_NAME.INJECTION_INFOR} element={<Injection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
