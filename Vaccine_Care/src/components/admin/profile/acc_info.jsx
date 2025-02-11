import React from 'react';
import './acc_info.css'; // Đảm bảo bạn đã tạo file CSS này

const AccInfo = () => {
    return (
        <div className="acc-info-container">
            <div className="profile-picture">
                <img src="assets/profile.jpg" alt="Profile" />
            </div>
            <div className="info">
                <h2>Thông tin tài khoản</h2>
                <p><strong>Họ và tên:</strong> Nguyễn Văn A</p>
                <p><strong>Email:</strong> nguyen.vana@example.com</p>
                <p><strong>Số điện thoại:</strong> 0123456789</p>
                <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
            </div>
        </div>
    );
};

export default AccInfo;
