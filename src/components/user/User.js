import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../feed/Feed';
import Styles from '../styles/User.styled';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Styles>
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound text="Usuário não encontrado" />} />
      </Routes>
    </Styles>
  );
};

export default User;
