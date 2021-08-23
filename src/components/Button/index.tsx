import React from 'react';
import { BtnWrapper } from './Button.styled';
import { ButtonConfig } from './Button';

const Button = ({ children, color, link, type }: ButtonConfig) => {
  const btn: JSX.Element = (
    <BtnWrapper color={color} type={type}>
      {children}
    </BtnWrapper>
  );

  return link ? <a href={link}>{btn}</a> : btn;
};

export default Button;
