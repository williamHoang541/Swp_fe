import React, { useState } from 'react';
import './vaccine.css'; // Tạo file CSS cho trang Vaccine

const Vaccine = () => {
    const [vaccines, setVaccines] = useState([
        { id: 1, name: 'Vaccine A', type: 'Vaccine ngừa bệnh', dosage: '2 liều', status: 'Sẵn có' },
        { id: 2, name: 'Vaccine B', type: 'Vaccine ngừa bệnh', dosage: '1 liều', status: 'Hết hàng' },
        { id: 3, name: 'Vaccine C', type: 'Vaccine ngừa bệnh', dosage: '3 liều', status: 'Sẵn có' },
        // Thêm vaccine khác nếu cần
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [sortOption, setSortOption] = useState('name');

    const handleSort = (option) => {
        const sortedVaccines = [...vaccines].sort((a, b) => {
            if (option === 'name') {
                return a.name.localeCompare(b.name);
            } else if (option === 'type') {
                return a.type.localeCompare(b.type);
            } else if (option === 'status') {
                return a.status.localeCompare(b.status);
            }
            return 0;
        });
        setVaccines(sortedVaccines);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        handleSort(event.target.value);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage(prev => Math.min(prev + 1, Math.ceil(vaccines.length / itemsPerPage)));
        } else {
            setCurrentPage(prev => Math.max(prev - 1, 1));
        }
    };

    // Calculate current vaccines for pagination
    const indexOfLastVaccine = currentPage * itemsPerPage;
    const indexOfFirstVaccine = indexOfLastVaccine - itemsPerPage;
    const currentVaccines = vaccines.slice(indexOfFirstVaccine, indexOfLastVaccine);

    return (
        <div className="vaccine-container">
            <h1>Danh sách vaccine</h1>
            <div className="top-bar">
                <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
                    <option value="name">Sort by Name</option>
                    <option value="type">Sort by Type</option>
                    <option value="status">Sort by Status</option>
                </select>
            </div>
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
                    {currentVaccines.map(vaccine => (
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
            <div className="pagination">
                <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="nav-button">
                    &#9664; Previous
                </button>
                <button onClick={() => handlePageChange('next')} disabled={indexOfLastVaccine >= vaccines.length} className="nav-button">
                    Next &#9654;
                </button>
            </div>
        </div>
    );
};

export default Vaccine; 