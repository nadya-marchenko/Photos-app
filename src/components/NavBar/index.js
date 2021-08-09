import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const NavBar = () => (
    <header>
        <a href="/" className='logo'>Photos App</a>
        
        <nav className='main-nav'>
            <ul className='menu'>
                <li><NavLink to='/profile/1/photos'>Photos</NavLink></li>
                <li><NavLink to='/profile/1/albums'>Albums</NavLink></li>
                <li><NavLink to='/profile/1'>Profile</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default NavBar;