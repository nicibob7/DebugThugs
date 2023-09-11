import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const RegisterCard = () => {
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

        const response = axios.post('http://localhost:3000/register', options);
    };

    return (
        <div className="register-card">
            <form className="register-card-form" onSubmit={handleSubmit}>
                <span style={{ fontWeight: 'bold' }}>Register</span>
                <div className="register-card-form-input">
                    <div>
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleUsername}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                        />
                        <br />
                    </div>
                </div>
                <div>
                    <button className="register-button" type="submit">
                        Register
                    </button>
                </div>
                <div style={{ fontSize: '14px', color: 'grey' }}>
                    Already registered? <NavLink to="/login">Login</NavLink>
                </div>
            </form>
        </div>
    );
};

export default RegisterCard;
