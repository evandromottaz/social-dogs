import React from 'react';
import Error from '../helper/Error';
import { StyledInput, StyledLabel, Wrapper } from '../styles/Form.styled';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <Wrapper margin="1rem 0">
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
      {error && <Error error={error} />}
    </Wrapper>
  );
};

export default Input;
