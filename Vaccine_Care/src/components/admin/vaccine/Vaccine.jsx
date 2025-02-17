import React, { useState } from 'react';
import './vaccine.css';

const Vaccine = () => {
    const [vaccines, setVaccines] = useState([
        { id: 1, name: 'Vaccine A', type: 'Vaccine ngừa bệnh', dosage: '2 liều', status: 'Sẵn có' },
        { id: 2, name: 'Vaccine B', type: 'Vaccine ngừa bệnh', dosage: '1 liều', status: 'Hết hàng' },
        { id: 3, name: 'Vaccine C', type: 'Vaccine ngừa bệnh', dosage: '3 liều', status: 'Sẵn có' },
        { id: 4, name: 'Vaccine D', type: 'Vaccine phòng ngừa', dosage: '2 liều', status: 'Sẵn có' },
        { id: 5, name: 'Vaccine E', type: 'Vaccine điều trị', dosage: '1 liều', status: 'Hết hàng' },
        { id: 6, name: 'Vaccine F', type: 'Vaccine ngừa bệnh', dosage: '2 liều', status: 'Sẵn có' },
        { id: 7, name: 'Vaccine G', type: 'Vaccine phòng ngừa', dosage: '3 liều', status: 'Sẵn có' },
        { id: 8, name: 'Vaccine H', type: 'Vaccine điều trị', dosage: '1 liều', status: 'Hết hàng' },
        { id: 9, name: 'Vaccine I', type: 'Vaccine ngừa bệnh', dosage: '2 liều', status: 'Sẵn có' },
        { id: 10, name: 'Vaccine J', type: 'Vaccine phòng ngừa', dosage: '2 liều', status: 'Sẵn có' }
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

    const indexOfLastVaccine = currentPage * itemsPerPage;
    const indexOfFirstVaccine = indexOfLastVaccine - itemsPerPage;
    const currentVaccines = vaccines.slice(indexOfFirstVaccine, indexOfLastVaccine);

    return (
        <div className="admin">
            <div className="admin-vaccine-container">
                <h1 className="admin-vaccine-title">Danh sách vaccine</h1>
                <div className="admin-vaccine-top-bar">
                    <select value={sortOption} onChange={handleSortChange} className="admin-vaccine-sort-dropdown">
                        <option value="name">Sort by Name</option>
                        <option value="type">Sort by Type</option>
                        <option value="status">Sort by Status</option>
                    </select>
                </div>
                <div className="admin-vaccine-table-container">
                    <table className="admin-vaccine-table">
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
                                    <td>
                                        <span className={`admin-vaccine-status ${vaccine.status.toLowerCase().replace(' ', '-')}`}>
                                            {vaccine.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="admin-vaccine-pagination">
                    <button 
                        onClick={() => handlePageChange('prev')} 
                        disabled={currentPage === 1} 
                        className="admin-vaccine-nav-button"
                    >
                        ◀ Previous
                    </button>
                    <button 
                        onClick={() => handlePageChange('next')} 
                        disabled={indexOfLastVaccine >= vaccines.length} 
                        className="admin-vaccine-nav-button"
                    >
                        Next ▶
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Vaccine;