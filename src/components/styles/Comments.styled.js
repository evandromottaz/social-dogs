import styled from 'styled-components';

const Comments = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: ${({ single }) => (single ? 0 : '0 2rem')};

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

export default Comments;
