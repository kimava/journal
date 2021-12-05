import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import Grid from './styles/grid';
// import logo from './logo.svg';

import Header from './app/header';
import AddJournalForm from './features/journals/addJournalForm';
import JournalsList from './features/journals/journalsList';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Header />
      <div className='App'>
        <Grid>
          <AddJournalForm />
          <JournalsList />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
