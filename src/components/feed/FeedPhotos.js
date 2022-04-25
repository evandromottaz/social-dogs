import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import Styles from '../styles/FeedPhotos.styled';

const FeedPhotos = ({ page, setModalPhoto, user, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Styles>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </Styles>
    );
  else return null;
};

export default FeedPhotos;
