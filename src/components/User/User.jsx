import React from 'react';
import { NavLink } from 'react-router';

const User = ({user}) => {
    const {id,name,email}=user
    

    return (
        <div>
            <hr />
            <h2>{name}</h2>
            <p>{email}</p>
            {/* <NavLink to={`users/${id}`}>User Details</NavLink> */}
            <NavLink to={`user/${id}`}>User Details</NavLink>
            <hr />
        </div>
    );
};

export default User;