import React, { useState } from 'react';
import './staff.css'; // Tạo file CSS cho trang Staff

const Staff = () => {
    const [staffMembers, setStaffMembers] = useState([
        { id: 1, name: 'Nguyễn Văn A', position: 'Bác sĩ', email: 'a@example.com' },
        { id: 2, name: 'Trần Thị B', position: 'Y tá', email: 'b@example.com' },
        { id: 3, name: 'Lê Văn C', position: 'Dược sĩ', email: 'c@example.com' },
        // Thêm nhân viên khác nếu cần
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const [sortOption, setSortOption] = useState('name');

    const handleSort = (option) => {
        const sortedMembers = [...staffMembers].sort((a, b) => {
            if (option === 'name') {
                return a.name.localeCompare(b.name);
            } else if (option === 'position') {
                return a.position.localeCompare(b.position);
            } else if (option === 'email') {
                return a.email.localeCompare(b.email);
            }
            return 0;
        });
        setStaffMembers(sortedMembers);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        handleSort(event.target.value);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage(prev => Math.min(prev + 1, Math.ceil(staffMembers.length / itemsPerPage)));
        } else {
            setCurrentPage(prev => Math.max(prev - 1, 1));
        }
    };

    // Calculate current staff members for pagination
    const indexOfLastMember = currentPage * itemsPerPage;
    const indexOfFirstMember = indexOfLastMember - itemsPerPage;
    const currentMembers = staffMembers.slice(indexOfFirstMember, indexOfLastMember);

    return (
        <div className="staff-container">
            <h1>Danh sách nhân viên</h1>
            <div className="top-bar">
                <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
                    <option value="name">Sort by Name</option>
                    <option value="position">Sort by Position</option>
                    <option value="email">Sort by Email</option>
                </select>
            </div>
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
                    {currentMembers.map(member => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.position}</td>
                            <td>{member.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="nav-button">
                    &#9664; Previous
                </button>
                <button onClick={() => handlePageChange('next')} disabled={indexOfLastMember >= staffMembers.length} className="nav-button">
                    Next &#9654;
                </button>
            </div>
        </div>
    );
};

export default Staff; 