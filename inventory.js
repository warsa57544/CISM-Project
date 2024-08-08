import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig'; // Firebase setup

const InventoryDashboard = () => {
    const [inventory, setInventory] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('inventory').get();
            setInventory(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchData();
    }, []);

    const filteredInventory = inventory.filter(item =>
        item.type.includes(filter) || item.department.includes(filter)
    );

    return (
        <div className="dashboard-container">
            <h2>Inventory Dashboard</h2>
            <input
                type="text"
                placeholder="Filter by type or department"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredInventory.map(item => (
                        <tr key={item.id}>
                            <td>{item.deviceID}</td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                            <td>{item.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryDashboard;
