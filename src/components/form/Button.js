import React from 'react';
import { StyledButton } from '../styles/Form.styled';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
