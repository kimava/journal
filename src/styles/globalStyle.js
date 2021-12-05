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
      font-family: ${theme.fonts.family};
      background-color: ${theme.colors.pale};
    }
  `;
}}
`;

export default GlobalStyle;
