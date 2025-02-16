import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Phone from "../../assets/Login/Tabpanel.png";

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError(null); // Reset lỗi trước khi gửi request
    try {
      const response = await fetch(
        "https://swdsapelearningapi.azurewebsites.net/api/User/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Đăng ký thất bại, thử lại!");
      }

      // Nếu đăng ký thành công
      navigate("/successregis");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="HomePage-Allcontainer">
      <div className="HomePage-main-container">
        <div className="flex-column-eb"></div>
        <div className="container mt-5">
          <div className="row mt-152">
            <div className="col-6">
              <div className="Regis-from">
                <div className="Regis-title">Đăng ký ở đây:</div>
                {error && <p className="text-danger">{error}</p>}
                <div className="Regis-input">
                  <div className="Regis-info">Tên:</div>
                  <input
                    type="text"
                    name="username"
                    className="Regis-single-input"
                    placeholder="Nhập tên"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="Regis-input">
                  <div className="Regis-info">Email:</div>
                  <input
                    type="email"
                    name="email"
                    className="Regis-single-input"
                    placeholder="Nhập email của bạn"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="Regis-input">
                  <div className="Regis-info">Nhập mật khẩu:</div>
                  <input
                    type="password"
                    name="password"
                    className="Regis-single-input"
                    placeholder="Nhập mật khẩu"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="Regis-input">
                  <div className="Regis-info">Nhập lại mật khẩu:</div>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="Regis-single-input"
                    placeholder="Nhập lại mật khẩu"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="Regis-input">
                  <button className="Regis-button mt-4" onClick={handleRegister}>
                    Gửi
                  </button>
                </div>
              </div>
            </div>

            <div className="col-6 Regis-kkk">
              <div className="Regis-introContainer">
                <img src={Phone} className="Regis-icon" alt="intro" />
                <div className="Regis-intro">
                "Chào mừng bạn đến với hệ thống tiêm chủng! Hãy đăng nhập để
                theo dõi lịch tiêm chủng và bảo vệ sức khỏe của con yêu."
                </div>
                <div className="Regis-intro-khangdoan">-Khang Đoàn-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
