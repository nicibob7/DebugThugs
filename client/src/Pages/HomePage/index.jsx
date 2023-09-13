import React from 'react';
import './style.css';
import { useAuth } from '../../Contexts';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <>
            <div id="sideBanner"></div>
        </>
    );
};

export default HomePage;
