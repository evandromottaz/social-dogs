import React from 'react';
import { StyledHeader, Nav, Login, Logo } from './styles/Header.styled';
// import { ReactComponent as Dogs } from '../assets/dogs.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo to="/">
          <img src="./assets/dogs.svg" alt="Dogs logo" />
        </Logo>
        <Login to="/login">Login / Criar</Login>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
