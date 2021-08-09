import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const NavBar = () => (
    <header>
        <a href="/" className='logo'>Photos App</a>
        
        <nav className='main-nav'>
            <ul className='menu'>
                <li>
                    <NavLink to='/profile/1/photos'>
                        <PhotoIcon style={{ verticalAlign: 'middle' }} /> 
                        <span className='item-nav'>Photos</span>
                        </NavLink>
                </li>
                <li>
                    <NavLink to='/profile/1/albums'>
                        <PhotoAlbumIcon style={{ verticalAlign: 'middle' }} /> 
                        <span className='item-nav'>Albums</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile/1'>
                        <AccountCircleIcon style={{ verticalAlign: 'middle' }} /> 
                        <span className='item-nav'>Profile</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default NavBar;