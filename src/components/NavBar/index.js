import React from 'react';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Header, Logo, NavWrapper } from './NavBar.styled';
import NavItem from './NavItem';
import { useLocation } from 'react-router';


const NavBar = () => {
    const currentUrl = useLocation();
    const currentUser = currentUrl.pathname.match(/\d+/g);

    const nav = [
        { label: 'Photos', icon: <PhotoIcon />, id: 1, link: '/profile/1/photos' },
        { label: 'Albums', icon: <PhotoAlbumIcon />, id: 2, link: `/profile/${currentUser}/albums` },
        { label: 'Profile', icon: <AccountCircleIcon />, id: 3, link: '/profile/user' },
    ];

    return (
        <Header>
            <Logo href="/">Photos App</Logo>
            <NavWrapper>
                <ul>
                    {nav.map(({ label, icon, id, link }) =>
                        <NavItem key={id} label={label} icon={icon} link={link}  />
                    )}
                </ul>
            </NavWrapper>
        </Header>
    );
}
    ;

export default NavBar;