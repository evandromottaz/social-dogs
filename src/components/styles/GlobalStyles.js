import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding-top:4rem;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second: 'Spectral', georgia;
  font-family: var(---type-first);
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

a {
  text-decoration: none;
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
  display: block;
  font-size: 1rem;
  font-family: var(---type-first);
  color: #333;
}

`;

export default GlobalStyles;
