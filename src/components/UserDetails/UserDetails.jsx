import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const eachUser=useLoaderData()
    // console.log(eachUser)
    const {name,email,company,phone}=eachUser
    return (
        <div>
            <h1>This is the indivisula users details</h1>
            <p>name : {name}</p>
            <p>Email : {email}</p>
            <p>phone: {phone}</p>
            <p>Company : {company.bs}</p>
            <p></p>
        </div>
    );
};

export default UserDetails;