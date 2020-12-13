import { css } from 'styled-components';

import FiraSansRegularWoff from '../fonts/FiraSans/FiraSans-Regular.woff';
import FiraSansRegularWoff2 from '../fonts/FiraSans/FiraSans-Regular.woff2';
import FiraSansMediumWoff from '../fonts/FiraSans/FiraSans-Medium.woff';
import FiraSansMediumWoff2 from '../fonts/FiraSans/FiraSans-Medium.woff2';
import FiraSansSemiBoldWoff from '../fonts/FiraSans/FiraSans-SemiBold.woff';
import FiraSansSemiBoldWoff2 from '../fonts/FiraSans/FiraSans-SemiBold.woff2';

import FiraSansRegularItalicWoff from '../fonts/FiraSans/FiraSans-Italic.woff';
import FiraSansRegularItalicWoff2 from '../fonts/FiraSans/FiraSans-Italic.woff2';
import FiraSansMediumItalicWoff from '../fonts/FiraSans/FiraSans-MediumItalic.woff';
import FiraSansMediumItalicWoff2 from '../fonts/FiraSans/FiraSans-MediumItalic.woff2';
import FiraSansSemiBoldItalicWoff from '../fonts/FiraSans/FiraSans-SemiBoldItalic.woff';
import FiraSansSemiBoldItalicWoff2 from '../fonts/FiraSans/FiraSans-SemiBoldItalic.woff2';

const firaSans = {
  name: 'Fira Sans',
  weights: {
    400: {
      normal: {
        woff: FiraSansRegularWoff,
        woff2: FiraSansRegularWoff2
      },
      italic: {
        woff: FiraSansRegularItalicWoff,
        woff2: FiraSansRegularItalicWoff2
      }
    },
    500: {
      normal: {
        woff: FiraSansMediumWoff,
        woff2: FiraSansMediumWoff2
      },
      italic: {
        woff: FiraSansMediumItalicWoff,
        woff2: FiraSansMediumItalicWoff2
      }
    },
    600: {
      normal: {
        woff: FiraSansSemiBoldWoff,
        woff2: FiraSansSemiBoldWoff2
      },
      italic: {
        woff: FiraSansSemiBoldItalicWoff,
        woff2: FiraSansSemiBoldItalicWoff2
      }
    }
  }
};

const fonts = [firaSans];

const createFontFaces = (fonts) => {
  let fontFaces = '';

  for (const font of fonts) {
    for (const [weight, styles] of Object.entries(font.weights)) {
      for (const [style, formats] of Object.entries(styles)) {
        fontFaces += `
          @font-face {
            font-family: '${font.name}';
            src: url(${formats.woff2}) format('woff2'),
                url(${formats.woff}) format('woff');
            font-weight: ${weight};
            font-style: ${style};
            font-display: auto;
          }
        `;
      }
    }
  }

  return fontFaces;
};

const Fonts = css`
  ${createFontFaces(fonts)}
`;

export default Fonts;
