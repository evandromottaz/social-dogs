import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../feed/Feed';
import { Wrapper } from '../styles/User.styled';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <Wrapper>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound text="Usuário não encontrado" />} />
      </Routes>
    </Wrapper>
  );
};

export default User;
