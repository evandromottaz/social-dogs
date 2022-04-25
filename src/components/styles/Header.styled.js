import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
`;

export const Nav = styled.nav`
  // css dinâmico no app
  ${({ theme }) => theme.container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const Login = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url('./assets/usuario.svg') no-repeat center center;
    margin-left: 0.5rem;
  }
`;

export default Header;
