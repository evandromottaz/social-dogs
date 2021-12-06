import React from 'react';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  Wrapper,
} from '../styles/Form.styled';

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete="current-password"
      />
      <StyledError>Error</StyledError>
    </Wrapper>
  );
};

export default Input;
