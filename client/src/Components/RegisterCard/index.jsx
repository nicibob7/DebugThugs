import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const RegisterCard = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const options = {
            method: 'POST',
            body: JSON.stringify({
                name: form.get('username'),
                email: form.get('email'),
                password: form.get('password'),
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch('http://localhost:3000/users/register', options);
        const data = await response.json()
        console.log(data);
    };

    return (
        <div className="register-card">
            <form role="form" className="register-card-form" onSubmit={handleSubmit}>
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
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" name="email" value={email} onChange={handleEmail} />
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
