import React from 'react';
import StyledFooter from './styles/StyledFooter.styled';
import { ReactComponent as Dogs } from '../assets/dogs-footer.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <Dogs />
      <p>Social Dogs criada no curso de React da Origamid.</p>
    </StyledFooter>
  );
};

export default Footer;
