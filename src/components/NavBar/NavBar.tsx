import React from 'react';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Header, Logo, NavWrapper } from './NavBar.styled';
import NavItem from './NavItem/NavItem';
import { useLocation } from 'react-router';
import { NavItemProps } from './NavItem/NavItem.d';
import { LocationStateProps } from './NavBar.d';

const NavBar = () => {
  const currentUser: RegExpMatchArray | null =
    useLocation<LocationStateProps>().pathname.match(/\d+/g);

  const nav: NavItemProps[] = [
    { label: 'Photos', icon: <PhotoIcon />, id: 1, link: '/profile/1/photos' },
    {
      label: 'Albums',
      icon: <PhotoAlbumIcon />,
      id: 2,
      link: `/profile/${currentUser}/albums`,
    },
    {
      label: 'Profile',
      icon: <AccountCircleIcon />,
      id: 3,
      link: `/profile/${currentUser}/user`,
    },
  ];

  return (
    <Header>
      <Logo href="/">Photos App</Logo>
      <NavWrapper>
        <ul>
          {nav.map(({ label, icon, id, link }: NavItemProps) => (
            <NavItem key={id} label={label} icon={icon} link={link} />
          ))}
        </ul>
      </NavWrapper>
    </Header>
  );
};
export default NavBar;
