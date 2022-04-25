import React from 'react';
import Styles from '../styles/Image.styled';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  // alt apenas para não ter erro de esLint
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Styles>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className="img" alt={alt} {...props} />
    </Styles>
  );
};

export default Image;
