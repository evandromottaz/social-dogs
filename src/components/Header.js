import React from 'react';
import { StyledHeader, Nav, Login, Logo } from './styles/Header.styled';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <StyledHeader>
      <Nav>
        <Logo to="/">
          <img src="./assets/dogs.svg" alt="Dogs logo" />
        </Logo>

        {data ? (
          <Login to="/login">
            {data.nome} <button onClick={userLogout}>Sair</button>
          </Login>
        ) : (
          <Login to="/login">Login / Criar</Login>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
