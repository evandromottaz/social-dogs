import React from 'react';
import Image from '../helper/Image';
import Styles from '../styles/FeedPhotosItem';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <Styles onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="viewd">{photo.acessos}</span>
    </Styles>
  );
}

export default FeedPhotosItem;
