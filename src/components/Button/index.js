import React from 'react';
import PropTypes from 'prop-types';
import { BtnWrapper } from './Button.styled';

const Button = (props) =>
    <BtnWrapper className={`btn ${props.color}-color-btn`} type='button'>
        {props.children}
    </BtnWrapper>;

Button.propTypes = {
    color: PropTypes.string
};

export default Button;