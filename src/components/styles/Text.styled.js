import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.typeSecond};
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.typeSecond};
  line-height: 1;
  font-size: 2rem;

  &::after {
    content: '';
    display: block;
    background-color: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
