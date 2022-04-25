import React from 'react';
import Home from './styles/Home.styled';
import { Title } from './styles/Text.styled';

const NotFound = ({ text }) => {
  return (
    <Home>
      <Title>Ops...</Title>
      <p>{text}</p>
    </Home>
  );
};

export default NotFound;
