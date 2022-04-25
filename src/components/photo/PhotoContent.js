import React from 'react';
import Styles from '../styles/PhotoContent.styled';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { Title } from '../styles/Text.styled';
import { UserContext } from '../../UserContext';
import ButtonPhotoDelete from './ButtonPhotoDelete';
import Image from '../helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <Styles single={single}>
      <div className="img">
        <Image src={photo.src} alt={photo.title} />
      </div>

      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <ButtonPhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </Styles>
  );
};

export default PhotoContent;
