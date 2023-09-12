import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const RegisterCard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleName = (event) => {
        setName(event.target.value);
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
                name: form.get('name'),
                email: form.get('email'),
                password: form.get('password'),
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch('http://localhost:3000/users/register', options);

        if (response.status === 201) {
            navigate("/")
        } else {
            alert('Failed to register') // change this out
        }
    };

    return (
        <div className="register-card">
            <form role="form" className="register-card-form" onSubmit={handleSubmit}>
                <span style={{ fontWeight: 'bold' }}>Register</span>
                <div className="register-card-form-input">
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleName}
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
