import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { UserContext } from '../../UserContext';
import {
  CreateAccount,
  LostPassword,
  Section,
  Wrapper,
} from '../styles/Form.styled';
import { Title, SubTitle } from '../styles/Text.styled';
import Error from '../helper/Error';
import Head from '../helper/Head';

const LoginForm = () => {
  const username = useForm(); //value, setValue, onChange
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <Section>
      <Head title="Login" />
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <LostPassword to="/login/perdeu">Esqueceu a senha?</LostPassword>

      <Wrapper margin="4rem 0">
        <SubTitle>Cadastre-se</SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <CreateAccount to="/login/criar">Cadastro</CreateAccount>
      </Wrapper>
    </Section>
  );
};

export default LoginForm;
