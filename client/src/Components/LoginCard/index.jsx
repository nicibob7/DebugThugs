import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const LoginCard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                username: form.get('username'),
                password: form.get('password'),
            },
        };

        const response = axios.post('http://localhost:3000/login', options);
    };

    return (
        <div className="login-card">
            <form role="form" className="login-card-form" onSubmit={handleSubmit}>
                <span style={{ fontWeight: 'bold' }}>Login</span>
                <div className="login-card-form-input">
                    <div>
                        <label className="input-label" htmlFor="username">
                            Username
                        </label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>
                    <div>
                        <label className="input-label" htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                </div>
                <div>
                    <button className="login-button" type="submit">
                        Login
                    </button>
                </div>
                <div style={{ fontSize: '14px', color: 'grey' }}>
                    Not registered? <NavLink to="/register">Register</NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginCard;
