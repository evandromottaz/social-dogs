import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from './PhotoContent';
import StyledHome from '../styles/StyledHome.styled';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <StyledHome>
        <PhotoContent data={data} single={true} />
      </StyledHome>
    );

  return <div>Photo</div>;
};

export default Photo;
