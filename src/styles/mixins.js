import { css } from 'styled-components';

const mixins = {
  button: css`
    display: inline-block;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};

    font-size: 0.875rem;

    text-decoration: none;

    padding: 0.625rem 1.25rem;
  `,
  unstyledButton: css`
    all: unset;

    cursor: pointer;

    &:focus-visible {
      outline: -webkit-focus-ring-color auto 1px;
    }
  `,
  unstyledList: css`
    list-style: none;
    margin 0;
    padding: 0;
  `
};

export default mixins;
