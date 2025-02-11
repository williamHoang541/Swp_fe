import React from 'react';
import './dashboard.css'; // Create a new CSS file for dashboard styles

const Dashboard = () => {
    const orders = [
        { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
        { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
        { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
        { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
        { id: '00006', name: 'Alfred Murray', address: '543 Weinman Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
        { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2019', type: 'Watch', status: 'Processing' },
        { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2019', type: 'Medicine', status: 'On Hold' },
        { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2019', type: 'Book', status: 'In Transit' },
    ];

    return (
        <div className="dashboard-container">
            <h1>Order Lists</h1>
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
                    {orders.map(order => (
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
                Showing 1-09 of 78
            </div>
        </div>
    );
};

export default Dashboard; 