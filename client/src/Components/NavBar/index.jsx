import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';
import { useAuth } from '../../Contexts';

const NavBar = () => {
    const style = { textDecoration: 'none', fontWeight: 'bold', color: 'color: var(--PuertoRico)' };
    const { user, setUser } = useAuth();

    const handleLogout = async () => {
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
