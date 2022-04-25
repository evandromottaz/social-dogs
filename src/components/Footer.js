import React from 'react';
import Styles from './styles/Footer.styled';
import { ReactComponent as Dogs } from '../assets/dogs-footer.svg';

const Footer = () => {
  return (
    <Styles>
      <Dogs />
      <p>Social Dogs criada no curso de React da Origamid.</p>
    </Styles>
  );
};

export default Footer;
