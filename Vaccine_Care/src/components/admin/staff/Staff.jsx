import React from 'react';
import './staff.css'; // Tạo file CSS cho trang Staff

const Staff = () => {
    const staffMembers = [
        { id: 1, name: 'Nguyễn Văn A', position: 'Bác sĩ', email: 'a@example.com' },
        { id: 2, name: 'Trần Thị B', position: 'Y tá', email: 'b@example.com' },
        { id: 3, name: 'Lê Văn C', position: 'Dược sĩ', email: 'c@example.com' },
        // Thêm nhân viên khác nếu cần
    ];

    return (
        <div className="staff-container">
            <h2>Danh sách nhân viên</h2>
            <table className="staff-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Chức vụ</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {staffMembers.map(member => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Staff; 