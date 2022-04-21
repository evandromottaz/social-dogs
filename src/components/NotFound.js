import React from 'react';
import StyledHome from './styles/StyledHome.styled';
import { Title } from './styles/Text.styled';

const NotFound = ({ text }) => {
  return (
    <StyledHome>
      <Title>Ops...</Title>
      <p>{text}</p>
    </StyledHome>
  );
};

export default NotFound;
