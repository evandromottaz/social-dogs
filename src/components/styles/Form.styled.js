import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const animeLeft = keyframes`
  to {
    opacity:1;
    transform:initial;
  }
`;

export const animation = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;

export const Section = styled(animation).attrs({
  as: 'section',
})`
  display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.columns};
  min-height: ${(props) => props.minHeight};
  gap: 2rem;
`;

export const LoginSection = styled(animation).attrs({
  as: 'section',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url('./assets/login.jpg') no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  margin: ${(props) => props.margin};
`;

export const UserWrapper = styled(Wrapper).attrs({
  as: 'div',
})`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: relative;
`;

export const LoginWrapper = styled(Wrapper).attrs({
  as: 'div',
})`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background-color: #eee;
  transition: 0.2s;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ctaShadow};
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.ctaText};
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 6rem;
  display: inline-block;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.ctaShadow},
      0 0 0 4px ${(props) => props.theme.colors.primary};
  }
  :disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

export const CreateAccount = styled(StyledButton).attrs({
  as: Link,
})``;

export const LostPassword = styled(Link)`
  display: inline-block;
  color: #666;
  padding: 0.6rem 0;
  line-height: 1;
  margin-top: 2rem;

  &::after {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    display: block;
  }
`;
