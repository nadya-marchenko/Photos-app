import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={`btn ${props.color}-color-btn`} type='button'>
            {props.children}
        </button>
    );

}

Button.propTypes = {
    color: PropTypes.string
};

export default Button;