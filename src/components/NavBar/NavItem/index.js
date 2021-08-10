import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavContainer } from './NavItem.styled';


const NavItem = ({ label, icon}) => 
    <NavContainer>
        <NavLink to='/profile/1/photos'>
            {icon} 
            <span className='item-nav'>{label}</span>
        </NavLink>
    </NavContainer>;

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.any,
}

export default NavItem;