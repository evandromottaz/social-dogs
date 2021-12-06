import React from 'react';
import {
  StyledError,
  StyledInput,
  StyledLabel,
  Wrapper,
} from '../styles/Form.styled';

const Input = ({ label, type, name }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} name={name} type={type} />
      <StyledError>Error</StyledError>
    </Wrapper>
  );
};

export default Input;
