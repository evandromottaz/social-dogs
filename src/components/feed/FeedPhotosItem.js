import React from 'react';
import Image from '../helper/Image';
import StyledFeedPhotosItem from '../styles/StyledFeedPhotosItem';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <StyledFeedPhotosItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className="viewd">{photo.acessos}</span>
    </StyledFeedPhotosItem>
  );
}

export default FeedPhotosItem;
