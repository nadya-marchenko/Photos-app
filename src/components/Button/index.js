import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper } from './Button.styled';

const Button = ({ children, color, link, type }) => {
    const btn = <BtnWrapper color={color} type={type}>{children}</BtnWrapper>;
    
    return(
        link ? <a href={link}>{btn}</a> : btn
    );
};

Button.propTypes = {
    color: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string
};

export default Button;