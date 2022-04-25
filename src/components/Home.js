import React from 'react';
import Styles from './styles/Home.styled';
import Feed from './feed/Feed';
import Head from './helper/Head';

const Home = () => {
  return (
    <Styles>
      <Head title="Home" description="Página principal sobre fotos do site" />
      <Feed />
    </Styles>
  );
};

export default Home;
