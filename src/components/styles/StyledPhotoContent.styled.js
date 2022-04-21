import styled from 'styled-components';

const StyledPhotoContent = styled.div`
  margin: auto;
  height: ${({ single }) => (single ? 'auto' : '36rem')};
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: ${({ single }) => (single ? '1fr' : '36rem 20rem')};
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  .details {
    padding: ${({ single }) => (single ? '1rem 0 0' : '2rem 2rem 0 2rem')};
  }

  .img {
    grid-row: ${({ single }) => (single ? 1 : 1 / 4)};
    border-radius: ${({ single }) => (single ? '0.4rem' : 'none')};
    overflow: ${({ single }) => (single ? 'hidden' : 'initial')};
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    .img {
      grid-row: 1;
    }
  }

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author a:hover {
    text-decoration: underline;
  }

  .viewd::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url('../../Assets/visualizacao-black.svg');
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .attributes li {
    margin-right: 2rem;
  }

  .attributes li::before {
    content: '';
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;

export default StyledPhotoContent;
