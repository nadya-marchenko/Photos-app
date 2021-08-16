import React from 'react';
import PropTypes from 'prop-types';
import { InputIcon, InputWrapper, TextFieldSet } from './Input.styled';

const Input = ({ type, label, id, icon, onChangeHandler, value }) => 
    <InputWrapper type={type}>
        {type === 'search' && <InputIcon>{icon}</InputIcon>}
        <input type={type} id={id} value={value} onChange={onChangeHandler} />
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
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    value: PropTypes.string
};

export default Input;