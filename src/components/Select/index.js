import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, SelectFieldSet } from './Select.styled';

const Select = ({ label, id, options, handleSettingPerPageValue }) => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
        handleSettingPerPageValue(+e.target.value);
    };

    return(
        <InputWrapper>
            <select id={id} value={value} onChange={handleChange} >
                {options.map((el, index) => 
                    <option key={index} value={el}>{el}</option>
                )}
            </select>
            <SelectFieldSet>
                <legend>
                    <span>{label}</span>
                </legend>
            </SelectFieldSet>
        </InputWrapper>
    );
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    handleSettingPerPageValue: PropTypes.func
};

export default Select;