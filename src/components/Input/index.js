import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, TextFieldSet } from './Input.styled';

const Input = ({ type, label, id }) => 
    <InputWrapper>
        <input type={type} id={id} />
        <TextFieldSet>
            <legend>
                <span>{label}</span>
            </legend>
        </TextFieldSet>
    </InputWrapper>;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Input;