import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, NavItemLabel } from './NavItem.styled';
import { NavItemConfig } from './NavItem';

const NavItem = ({ label, icon, link }: NavItemConfig) => (
  <NavContainer>
    <NavLink to={link}>
      {icon}
      <NavItemLabel>{label}</NavItemLabel>
    </NavLink>
  </NavContainer>
);

export default NavItem;
