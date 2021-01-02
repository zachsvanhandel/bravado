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
  buttonAlt: css`
    display: inline-block;

    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};

    font-size: 0.875rem;

    text-decoration: none;

    padding: 0.5rem 1.125rem;
    border: 0.125rem solid ${(props) => props.theme.colors.primary};
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
