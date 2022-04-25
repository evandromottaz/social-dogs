import styled from 'styled-components';

const Button = styled.button`
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
  margin-top: 1.5rem;

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

export default Button;
