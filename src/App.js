import React from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
// import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
