import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper, LinkWrapper } from './Button.styled';

const Button = ({ children, color, link, type }) => {
    return(
        link 
            ? <LinkWrapper href={link} color={color}>
                {children}
            </LinkWrapper>
            : <BtnWrapper type={type} color={color}>
                {children}
            </BtnWrapper>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.string
};

export default Button;