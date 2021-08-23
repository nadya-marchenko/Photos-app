import React from 'react';
import { InputIcon, InputWrapper, TextFieldSet } from './Input.styled';
import { InputConfig } from './Input';

const Input = ({
  type,
  label,
  id,
  icon,
  onChangeHandler,
  value,
  defaultValue,
}: InputConfig) => (
  <InputWrapper type={type}>
    {type === 'search' && <InputIcon>{icon}</InputIcon>}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChangeHandler}
      defaultValue={defaultValue}
    />
    <TextFieldSet>
      <legend>
        <span>{label}</span>
      </legend>
    </TextFieldSet>
  </InputWrapper>
);

export default Input;
