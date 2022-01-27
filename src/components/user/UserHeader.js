import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserWrapper } from '../styles/Form.styled';
import { Title } from '../styles/Text.styled';
import UserHeaderNav from './UserHeaderNav';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');

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
    <UserWrapper margin="1rem 0 2rem">
      <Title>{title}</Title>
      <UserHeaderNav />
    </UserWrapper>
  );
};

export default UserHeader;
