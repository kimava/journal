import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
body {
    padding: 0;
    margin: 0;
    font-family: 'Dosis', sans-serif;
    letter-spacing: 0.5px;
}
`;

export default GlobalStyle;
