import React from 'react';
import Input from '../form/Input';
import Button from '../form/Button';
import Error from '../helper/Error';
import StyledUserPhotoPost from '../styles/UserPhotoPost.styled';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../helper/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <StyledUserPhotoPost>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          className="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />

        {loading ? <Button>Carregando</Button> : <Button>Enviar</Button>}

        <Error error={error} />
      </form>

      <div>
        {img.preview && (
          <div
            className="preview"
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </StyledUserPhotoPost>
  );
};

export default UserPhotoPost;
