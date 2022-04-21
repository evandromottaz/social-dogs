import { createGlobalStyle, keyframes } from 'styled-components';

export const animeLeft = keyframes`
  to {
    opacity:1;
    transform:initial;
  }
`;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding-top:4rem;
  color: #333;
  font-family: ${({ theme }) => theme.fonts.typeFirst}
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
}

button,
input {
  font-family: ${({ theme }) => theme.fonts.typeFirst};
  display: block;
  font-size: 1rem;
  color: #333;
}

`;

export default GlobalStyles;
