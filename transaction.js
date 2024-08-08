import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';

const TransactionLog = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await db.collection('transactions').get();
            setTransactions(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchTransactions();
    }, []);

    return (
        <div className="log-container">
            <h2>Device Transaction Log</h2>
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Transaction Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(log => (
                        <tr key={log.id}>
                            <td>{log.deviceID}</td>
                            <td>{log.user}</td>
                            <td>{log.date.toDate().toLocaleString()}</td>
                            <td>{log.transactionType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionLog;
