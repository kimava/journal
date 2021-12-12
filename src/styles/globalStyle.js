import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
${({ theme }) => {
  return css`
    * {
      margin: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      font-family: ${theme.fonts.family};
      background-color: ${theme.colors.pale};
    }

    input,
    textarea {
      font: inherit;
      outline: none;
    }

    a {
      text-decoration: none;
      color: black;
    }

    a:hover {
      color: ${theme.colors.orange};
    }

    p {
      line-height: 1.5em;
    }
  `;
}}
`;

export default GlobalStyle;
