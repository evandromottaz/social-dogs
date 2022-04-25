import React from 'react';
import Styles from '../styles/Button.styled';
const Button = ({ children, ...props }) => {
  return (
    <Styles type="submit" {...props}>
      {children}
    </Styles>
  );
};

export default Button;
