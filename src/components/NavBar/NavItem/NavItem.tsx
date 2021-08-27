import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, NavItemLabel } from './NavItem.styled';
import { NavItemProps } from './NavItem.d';

const NavItem = ({ label, icon, link }: NavItemProps) => (
  <NavContainer data-testid="nav-item">
    <NavLink to={link}>
      {icon}
      <NavItemLabel>{label}</NavItemLabel>
    </NavLink>
  </NavContainer>
);

export default NavItem;
