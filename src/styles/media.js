import { css } from 'styled-components';

const breakpoints = {
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem'
};

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
