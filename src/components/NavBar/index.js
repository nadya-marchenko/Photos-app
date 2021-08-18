import React from 'react';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Header, Logo, NavWrapper } from './NavBar.styled';
import NavItem from './NavItem';


const NavBar = () => {
    const nav = [
        { label: 'Photos', icon: <PhotoIcon />, id: 1 },
        { label: 'Albums', icon: <PhotoAlbumIcon />, id: 2 },
        { label: 'Profile', icon: <AccountCircleIcon />, id: 3 },
    ];

    return (
        <Header>
            <Logo href="/">Photos App</Logo>
            <NavWrapper>
                <ul>
                    {nav.map(({ label, icon, id }) =>
                        <NavItem key={id} label={label} icon={icon}  />
                    )}
                </ul>
            </NavWrapper>
        </Header>
    );
}
    ;

export default NavBar;