import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';

const MaintenanceSchedule = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await db.collection('maintenance').get();
            setTasks(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchTasks();
    }, []);

    return (
        <div className="maintenance-container">
            <h2>Maintenance Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Scheduled Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.deviceID}</td>
                            <td>{task.scheduledDate.toDate().toLocaleString()}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MaintenanceSchedule;
