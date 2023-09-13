import React from 'react';
import { useAuth } from '../../Contexts';

const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </>
    );
};

export default ProfilePage;
