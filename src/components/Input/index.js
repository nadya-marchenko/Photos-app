import React from 'react';
import PropTypes from 'prop-types';
import { InputIcon, InputWrapper, TextFieldSet } from './Input.styled';

const Input = ({ type, label, id, icon }) => 
    <InputWrapper type={type}>
        {type === 'search' && <InputIcon>{icon}</InputIcon>}
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
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

export default Input;