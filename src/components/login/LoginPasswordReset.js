import React from 'react';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { PASSWORD_RESET } from '../../api';
import { Title } from '../styles/Text.styled';
import Error from '../helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    // url vinda da url de reset enviado no email
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }
  return (
    <div>
      <Head title="Resete sua senha" />
      <Title>Resete a senha</Title>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
