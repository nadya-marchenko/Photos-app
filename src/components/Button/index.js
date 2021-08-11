import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper } from './Button.styled';

const Button = ({ children, color, link }) =>
    <BtnWrapper color={color} href={link}>
        {children}
    </BtnWrapper>;

Button.propTypes = {
    color: PropTypes.string,
    link: PropTypes.string
};

export default Button;