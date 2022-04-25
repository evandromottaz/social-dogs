import React from 'react';
import Styles from '../styles/ButtonPhotoDelete.styled';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

const ButtonPhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <Styles disabled className="delete">
          Deletando
        </Styles>
      ) : (
        <Styles onClick={handleClick} className="delete">
          Deletar
        </Styles>
      )}
    </>
  );
};

export default ButtonPhotoDelete;
