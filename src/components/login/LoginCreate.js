import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { Section } from '../styles/Form.styled';
import { Title } from '../styles/Text.styled';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Section>
      <Title>Cadastre-se</Title>
      <form onSubsmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </Section>
  );
};

export default LoginCreate;
