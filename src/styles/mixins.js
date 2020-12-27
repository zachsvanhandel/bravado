import { css } from 'styled-components';

const mixins = {
  button: css`
    display: inline-block;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};

    font-size: 0.875rem;

    text-decoration: none;

    padding: 0.625rem 1.25rem;
  `
};

export default mixins;
