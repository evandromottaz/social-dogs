import React from 'react';
import StyledPhotoContent from '../styles/StyledPhotoContent.styled';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { Title } from '../styles/Text.styled';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <StyledPhotoContent>
      <div className="img">
        <img src={photo.src} alt={photo.title} />
      </div>

      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="viewd">{photo.acessos}</span>
          </p>

          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>

          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </StyledPhotoContent>
  );
};

export default PhotoContent;
