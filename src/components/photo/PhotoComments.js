import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import StyledComments from './../styles/StyledComments.styled';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <StyledComments ref={commentsSection} single={props.single}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </StyledComments>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};

export default PhotoComments;
