import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${(props) => props.theme.fonts}}

  body {
    ${(props) => props.theme.mixins.font}

    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.white};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: block;
  }
`;

export default GlobalStyle;
