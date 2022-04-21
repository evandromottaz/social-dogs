import React from 'react';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../helper/Error';
import StyledCommentsPhotoForm from '../styles/StyledPhotoCommentsForm.styled';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <StyledCommentsPhotoForm onSubmit={handleSubmit} single={single}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className="textarea"
      />
      <button className="button">
        <Enviar />
      </button>
      <Error error={error} />
    </StyledCommentsPhotoForm>
  );
};

export default PhotoCommentsForm;
