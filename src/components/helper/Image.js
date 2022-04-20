import React from 'react';
import StyledImage from '../styles/StyledImage.styled';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  // alt apenas para não ter erro de esLint
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <StyledImage>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className="img" alt={alt} {...props} />
    </StyledImage>
  );
};

export default Image;
