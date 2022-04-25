import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../form/Button';
import Input from '../form/Input';
import { UserContext } from '../../UserContext';
import Styles from '../styles/Form.styled';
import { Title, SubTitle } from '../styles/Text.styled';
import Error from '../helper/Error';
import Head from '../helper/Head';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const username = useForm(); //value, setValue, onChange
  const password = useForm();
  const navigate = useNavigate();
  const { userLogin, error, loading } = React.useContext(UserContext);
  function handleClick() {
    navigate('/login/criar');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <Styles margin="1rem 0">
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
        <Error error={error && 'Usuário ou senha incorretos.'} />
      </form>
      <Link className="lostPassword" to="/login/perdeu">
        Esqueceu a senha?
      </Link>

      <div>
        <SubTitle margin="4rem 0 0">Cadastre-se</SubTitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Button onClick={handleClick}>Cadastro</Button>
      </div>
    </Styles>
  );
};

export default LoginForm;
