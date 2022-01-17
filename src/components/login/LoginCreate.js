import React from 'react';
import { USER_POST } from '../../api';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { Section } from '../styles/Form.styled';
import { Title } from '../styles/Text.styled';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);

    // se a resposta for 200 (ok), faça o login do usuário
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <Section>
      <Title>Cadastre-se</Title>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </Section>
  );
};

export default LoginCreate;
