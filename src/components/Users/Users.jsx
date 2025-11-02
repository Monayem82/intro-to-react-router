import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const usersData=useLoaderData()
    // console.log(usersData)
    return (
        <div>
            <p>This is Users data format</p>
            {
                usersData.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;