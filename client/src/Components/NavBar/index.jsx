import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';
import { useAuth } from '../../Contexts';
import axios from 'axios';

const NavBar = () => {
    const style = { textDecoration: 'none', fontWeight: 'bold', color: 'color: var(--PuertoRico)' };
    const { user, setUser } = useAuth();

    const handleLogout = async () => {
        const tokenStr = localStorage.getItem('token')
        
        const data = {
            headers: {
                token: tokenStr
            }
        }
        try {
            const response = await axios.delete('http://localhost:3000/users/logout', data)
        
        } catch(err) {
            console.log(err.message)
        }
        localStorage.removeItem('token')
        await setUser('')
        // axios req to delete token
    }

    return (
        <>
            <div id="NavBar" data-testid="wrapper">
                <div className="mainNav">
                    <NavLink to="/" style={style}>
                        {/* Home |{' '} */}
                        Home
                    </NavLink>
                    <NavLink to="/timetable" style={style}>
                        {/* Timetable{' '} */}
                        Timetable
                    </NavLink>
                </div>
                <div className="loginNav">
                    {user ? (<>
                        <NavLink to="/profile" style={style}>
                            {/* Profile |{' '} */}
                            {user.name}
                        </NavLink><button onClick={handleLogout}>Logout</button></>
                    ) : (
                        <NavLink to="/login" style={style}>
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
