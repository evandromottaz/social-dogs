import React from 'react';
import { ReactComponent as BarkIcon } from '../../assets/enviar.svg';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../helper/Error';
import Styles from '../styles/PhotoCommentsForm.styled';

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
    <Styles onSubmit={handleSubmit} single={single}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className="textarea"
      />
      <button className="button">
        <BarkIcon />
      </button>
      <Error error={error} />
    </Styles>
  );
};

export default PhotoCommentsForm;
