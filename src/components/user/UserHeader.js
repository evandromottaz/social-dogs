import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../styles/User.styled';
import { Title } from '../styles/Text.styled';
import UserHeaderNav from './UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');

  // pathname obj of useLocation,it get the current page
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/conta/postar':
        setTitle('Adicionar imagem');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [pathname]);

  return (
    <Header margin="1rem 0 2rem">
      <Title>{title}</Title>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
