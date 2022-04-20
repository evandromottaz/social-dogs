import React from 'react';
import StyledHome from './styles/StyledHome.styled';
import Feed from './feed/Feed';

const Home = () => {
  return (
    <StyledHome>
      <Feed />
    </StyledHome>
  );
};

export default Home;
