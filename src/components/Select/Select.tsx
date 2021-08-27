import React from 'react';
import { InputWrapper, SelectFieldSet } from './Select.styled';
import { SelectProps } from './Select.d';

const Select = ({
  label,
  id,
  options,
  handleSettingPerPageValue,
}: SelectProps) => {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (e: {
    target: { value: string | React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
    handleSettingPerPageValue(+e.target.value);
  };

  return (
    <InputWrapper>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        data-testid="select-per-page"
      >
        {options.map((el: number, index: number) => (
          <option key={index} value={el} data-testid={`per-page-${index}`}>
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
