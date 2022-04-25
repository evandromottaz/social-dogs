import styled from 'styled-components';

const Form = styled.section`
  display: ${(props) => props.display};
  grid-template-columns: ${(props) => props.columns};
  min-height: ${(props) => props.minHeight};
  gap: 2rem;

  div {
    margin: ${({ margin }) => (margin ? margin : '1rem 0')};
  }

  .lostPassword {
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
  }

  .createAccount,
  button {
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
  }
`;

export const LoginSection = styled.section`
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

export default Form;
