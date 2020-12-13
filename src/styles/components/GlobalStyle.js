import { createGlobalStyle } from 'styled-components';

import Fonts from '../fonts';

const GlobalStyle = createGlobalStyle`
  ${Fonts}

  body {
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.white};

    font-family: ${(props) => props.theme.fonts.primary};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    display: block;
  }
`;

export default GlobalStyle;
