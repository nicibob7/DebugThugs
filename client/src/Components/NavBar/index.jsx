import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    const style = { textDecoration: 'none', fontWeight: 'bold', color: 'color: var(--PuertoRico)' };
    return (
        <>
            <div id="NavBar" data-testid="wrapper">
                <div className="mainNav">
                    <NavLink to="/" style={style}>
                        {/* Home |{' '} */}
                        Home
                    </NavLink>
                    <NavLink to="/profile" style={style}>
                        {/* Profile |{' '} */}
                        Profile
                    </NavLink>
                    <NavLink to="/timetable" style={style}>
                        {/* Timetable{' '} */}
                        Timetable
                    </NavLink>
                </div>
                <div className="loginNav">
                    <NavLink to="/login" style={style}>
                        {/* | Login{' '} */}
                        Login
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;