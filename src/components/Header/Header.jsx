import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='mobiles'>Mobiles</NavLink>
            <NavLink to='laptops'>Laptops</NavLink>
            <NavLink to='users'>Users</NavLink>
        </div>
    );
};

export default Header;