import React from 'react';
import './vaccine.css'; // Tạo file CSS cho trang Vaccine

const Vaccine = () => {
    const vaccines = [
        { id: 1, name: 'Vaccine A', type: 'Vaccine ngừa bệnh', dosage: '2 liều', status: 'Sẵn có' },
        { id: 2, name: 'Vaccine B', type: 'Vaccine ngừa bệnh', dosage: '1 liều', status: 'Hết hàng' },
        { id: 3, name: 'Vaccine C', type: 'Vaccine ngừa bệnh', dosage: '3 liều', status: 'Sẵn có' },
        // Thêm vaccine khác nếu cần
    ];

    return (
        <div className="vaccine-container">
            <h2>Danh sách vaccine</h2>
            <table className="vaccine-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên vaccine</th>
                        <th>Loại</th>
                        <th>Liều lượng</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {vaccines.map(vaccine => (
                        <tr key={vaccine.id}>
                            <td>{vaccine.id}</td>
                            <td>{vaccine.name}</td>
                            <td>{vaccine.type}</td>
                            <td>{vaccine.dosage}</td>
                            <td>{vaccine.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Vaccine; 