import { css } from 'styled-components';

const sizes = {
  sm: '36rem',
  md: '48rem',
  lg: '62rem',
  xl: '75rem'
};

const breakpoints = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default breakpoints;
