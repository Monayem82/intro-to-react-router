import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const usersData=useLoaderData()
    console.log(usersData)
    return (
        <div>
            This is the users
        </div>
    );
};

export default Users;