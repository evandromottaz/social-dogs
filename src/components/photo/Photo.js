import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/Error';
import Loading from '../helper/Loading';
import PhotoContent from './PhotoContent';
import StyledHome from '../styles/StyledHome.styled';
import Head from '../helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, request, error } = useFetch();
  console.log(data);
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <StyledHome>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </StyledHome>
    );

  return <div>Photo</div>;
};

export default Photo;
