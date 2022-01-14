import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { LoginSection, LoginWrapper } from '../styles/Form.styled';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <LoginSection>
      <LoginWrapper>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      </LoginWrapper>
    </LoginSection>
  );
};

export default Login;
