import React from 'react';
import { USER_POST } from '../../api';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { Section } from '../styles/Form.styled';
import { Title } from '../styles/Text.styled';
import { UserContext } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import Head from '../helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    // se a resposta for 200 (ok), faça o login do usuário
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <Section>
      <Head title="Criar conta" />
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </Section>
  );
};

export default LoginCreate;
