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
