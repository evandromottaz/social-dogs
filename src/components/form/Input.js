import React from 'react';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  Wrapper,
} from '../styles/Form.styled';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  console.log(value.length);
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete="current-password"
      />
      {error && <StyledError>{error}</StyledError>}
    </Wrapper>
  );
};

export default Input;
