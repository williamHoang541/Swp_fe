import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
