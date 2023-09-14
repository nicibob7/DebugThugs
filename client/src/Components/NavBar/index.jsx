import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './style.css';
import { useAuth } from '../../Contexts';
import axios from 'axios';

const NavBar = () => {
    // const style = { textDecoration: 'none', color: 'color: var(--PuertoRico)' };
    const { user, setUser } = useAuth();

   const navigate = useNavigate()

    const handleLogin = async () => {
        navigate('/login')
    }

    const handleLogout = async () => {
        const tokenStr = localStorage.getItem('token')
    
        const data = {
            headers: {
                token: tokenStr
            }
        }
        try {
            const response = await axios.delete('https://debugthugsapi.onrender.com/users/logout', data)
            localStorage.removeItem('token')
            await setUser('')
        } catch(err) {
            console.log(err.message)
        }
        
        
        // axios req to delete token
    }

    return (
        <>
            <div id="NavBar" data-testid="wrapper">
                <div className="mainNav">
                    <NavLink to="/">
                        {/* Home |{' '} */}
                        Home
                    </NavLink>
                    <NavLink to="/timetable">
                        {/* Timetable{' '} */}
                        Timetable
                    </NavLink>
                </div>
                <div className="loginNav">
                    {user ? (<>
                        <NavLink to="/profile">
                            {/* Profile |{' '} */}
                            {user.name}
                        </NavLink><button className='logout-btn' onClick={handleLogout}>Logout</button></>
                    ) : (
                        // <NavLink to="/login">
                        //     Login
                        // </NavLink>
                        <button className="login-btn" onClick={handleLogin}>Login</button>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
