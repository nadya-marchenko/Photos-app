import React from 'react';
import { InputWrapper, SelectFieldSet } from './Select.styled';
import { SelectConfig } from './Select';

const Select = ({
  label,
  id,
  options,
  handleSettingPerPageValue,
}: SelectConfig) => {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (e: {
    target: { value: string | React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
    handleSettingPerPageValue(+e.target.value);
  };

  return (
    <InputWrapper>
      <select id={id} value={value} onChange={handleChange}>
        {options.map((el: number, index: number) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
      <SelectFieldSet>
        <legend>
          <span>{label}</span>
        </legend>
      </SelectFieldSet>
    </InputWrapper>
  );
};

export default Select;
