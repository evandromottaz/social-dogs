import React from 'react';
import StyledPhotoDelete from '../styles/StyledPhotoDelete.styled';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../hooks/useFetch';

const PhotoDelete = ({ id }) => {
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
        <StyledPhotoDelete disabled className="delete">
          Deletando
        </StyledPhotoDelete>
      ) : (
        <StyledPhotoDelete onClick={handleClick} className="delete">
          Deletar
        </StyledPhotoDelete>
      )}
    </>
  );
};

export default PhotoDelete;
