import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { AuthProvider } from './Contexts';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<HomePage />} />
                    <Route path="timetable" element={<TimetablePage />} />
                    <Route path="profile" element={<ProfilePage />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
