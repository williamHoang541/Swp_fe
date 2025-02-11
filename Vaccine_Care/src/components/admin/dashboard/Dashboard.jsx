import React, { useState } from 'react';
import './dashboard.css'; // Create a new CSS file for dashboard styles

const Dashboard = () => {
    const [orders, setOrders] = useState([
        { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
        { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
        { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
        { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
        { id: '00006', name: 'Alfred Murray', address: '543 Weinman Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
        { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2019', type: 'Watch', status: 'Processing' },
        { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2019', type: 'Medicine', status: 'On Hold' },
        { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2019', type: 'Book', status: 'In Transit' },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Số lượng đơn hàng hiển thị trên mỗi trang
    const [sortOption, setSortOption] = useState('name');

    const handleSort = (option) => {
        const sortedOrders = [...orders].sort((a, b) => {
            if (option === 'name') {
                return a.name.localeCompare(b.name);
            } else if (option === 'id') {
                return a.id.localeCompare(b.id);
            } else if (option === 'date') {
                return new Date(a.date) - new Date(b.date);
            } else if (option === 'type') {
                return a.type.localeCompare(b.type);
            } else if (option === 'status') {
                return a.status.localeCompare(b.status);
            }
            return 0;
        });
        setOrders(sortedOrders);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        handleSort(event.target.value);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage(prev => Math.min(prev + 1, Math.ceil(orders.length / itemsPerPage)));
        } else {
            setCurrentPage(prev => Math.max(prev - 1, 1));
        }
    };

    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    return (
        <div className="dashboard-container">
            <h1>Order Lists</h1>
            <div className="top-bar">
                <select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
                    <option value="name">Sort by Name</option>
                    <option value="id">Sort by ID</option>
                    <option value="date">Sort by Date</option>
                    <option value="type">Sort by Type</option>
                    <option value="status">Sort by Status</option>
                </select>
            </div>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.date}</td>
                            <td>{order.type}</td>
                            <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1} className="nav-button">
                    &#9664; Previous
                </button>
                <button onClick={() => handlePageChange('next')} disabled={indexOfLastOrder >= orders.length} className="nav-button">
                    Next &#9654;
                </button>
            </div>
        </div>
    );
};

export default Dashboard; 