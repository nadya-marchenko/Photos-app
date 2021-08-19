import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavContainer, NavItemLabel } from './NavItem.styled';


const NavItem = ({ label, icon, link }) => 
    <NavContainer>
        <NavLink to={link}>
            {icon} 
            <NavItemLabel>{label}</NavItemLabel>
        </NavLink>
    </NavContainer>;

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.any,
    link: PropTypes.string,
}

export default NavItem;