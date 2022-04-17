import React from 'react';
import StyledFeedModal from '../styles/StyledFeedModal.styled';
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from '../photo/PhotoContent';

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <StyledFeedModal onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </StyledFeedModal>
  );
}

export default FeedModal;
