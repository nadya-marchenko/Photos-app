import React from 'react';
import { InputIcon, InputWrapper, TextFieldSet } from './Input.styled';
import { InputProps } from './Input.d';

const Input = ({
  type,
  label,
  id,
  icon,
  onChangeHandler,
  value,
  defaultValue,
}: InputProps) => (
  <InputWrapper type={type}>
    {type === 'search' && <InputIcon>{icon}</InputIcon>}
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChangeHandler}
      defaultValue={defaultValue}
      name={id}
      data-testid={id}
    />
    <TextFieldSet>
      <legend>
        <span>{label}</span>
      </legend>
    </TextFieldSet>
  </InputWrapper>
);

export default Input;
