import React from 'react';
import { PASSWORD_LOST } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import Error from '../helper/Error';
import { Title } from '../styles/Text.styled';
import Styles from '../styles/Form.styled';
import Head from '../helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(ev) {
    ev.preventDefault();
    const { url, options } = PASSWORD_LOST({
      login: login.value,
      url: window.location.href.replace('perdeu', 'resetar'),
    });
    const { json } = await request(url, options);
  }
  return (
    <Styles className="animation">
      <Head title="Esqueceu a senha" />
      <Title>Perdeu a senha?</Title>
      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email ou usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}

          <Error error={error} />
        </form>
      )}
    </Styles>
  );
};

export default LoginPasswordLost;
