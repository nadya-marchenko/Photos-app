import React from 'react';
import { BtnWrapper } from './Button.styled';
import { ButtonProps } from './Button.d';

const Button = ({ children, color, link, type }: ButtonProps) => {
  const btn: JSX.Element = (
    <BtnWrapper color={color} type={type} data-testid={children}>
      {children}
    </BtnWrapper>
  );

  return link ? <a href={link}>{btn}</a> : btn;
};

export default Button;
