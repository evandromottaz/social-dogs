import React from 'react';
import Error from '../helper/Error';
import Styles, { Label } from '../styles/Input.styled';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <>
      <Label htmlFor={name}></Label>
      {label}
      <Styles
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        autoComplete="current-password"
      />
      {error && <Error error={error} />}
    </>
  );
};

export default Input;
