import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Contexts';

const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const data = {
            email: form.get('email'),
            password: form.get('password'),
        };
        try {
            const response = await axios.post('https://debugthugsapi.onrender.com/users/login', data);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                const token = localStorage.getItem('token');
                const options = {
                    headers: {
                        Authorization: token,
                    },
                };
                const response2 = await axios.get(
                    'https://debugthugsapi.onrender.com/users/authenticate',
                    options
                );
                setUser(response2.data);
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="login-card">
            <form role="form" className="login-card-form" onSubmit={handleSubmit}>
                <span style={{ fontWeight: 'bold' }}>Login</span>
                <div className="login-card-form-input">
                    <div>
                        <label className="input-label" htmlFor="email">
                            Email
                        </label>
                        <br />
                        <input type="text" name="email" value={email} onChange={handleEmail} />
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
