import React from 'react';
import './style.css';
import { useAuth } from '../../Contexts';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <>
            <div id="sideBanner"></div>
            <div className='home-container'>
                <div className='home-wrapper-left'></div>
                <div className='home-wrapper-right'>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'></div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'></div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'></div>
                    </div>
                    <div className='h-wrapper-box'>
                        <div className='h-wrapper-ele'></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
