import styled from 'styled-components';

const Login = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url('../../assets/login.jpg') no-repeat center center;
    background-size: cover;
  }

  .form {
    max-width: 30rem;
    padding: 1rem;
    margin-top: 10vh;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
    .form {
      max-width: 100%;
      margin-top: 0;
    }
  }
`;

export default Login;
