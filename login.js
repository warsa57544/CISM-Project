import React, { useState } from 'react';
import { auth } from './firebaseConfig'; // Firebase setup

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Redirect to dashboard
            window.location.href = '/dashboard';
        } catch (err) {
            setError('Invalid login credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginScreen;
