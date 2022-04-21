import React from 'react';
import StyledHome from './styles/StyledHome.styled';
import Feed from './feed/Feed';
import Head from './helper/Head';

const Home = () => {
  return (
    <StyledHome>
      <Head title="Home" description="Página principal sobre fotos do site" />
      <Feed />
    </StyledHome>
  );
};

export default Home;
