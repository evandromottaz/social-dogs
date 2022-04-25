import styled from 'styled-components';

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  padding: 3rem 1rem 0 1rem;
  height: 10rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.ctaText};

  p {
    margin-top: 1rem;
  }
`;

export default Footer;
