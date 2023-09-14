import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
    HomePage,
    ProfilePage,
    TimetablePage,
    LoginPage,
    RegisterPage,
    NotFoundPage,
} from './Pages/export';
import { NavBar } from './Components/export';
import './App.css';
import { useAuth } from './Contexts';
import ProtectedRoute from './routes';
import axios from 'axios';

function App() {
    const { user, setUser } = useAuth();
    const nav = useNavigate();

    const handleRefresh = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const options = {
                headers: {
                    Authorization: token,
                },
            };
            const response = await axios.get('https://debugthugsapi.onrender.com/users/authenticate', options);
            await setUser(response.data);
        }
    };

    useEffect(() => {
        if (!user) {
            handleRefresh();
        }
    }, [user]);

    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<HomePage />} />
                <Route path="timetable" element={<ProtectedRoute redirectTo="/login" />}>
                    <Route index element={<TimetablePage />} />
                </Route>
                <Route path="profile" element={<ProtectedRoute redirectTo="/login" />}>
                    <Route index element={<ProfilePage />} />
                </Route>
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
