import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import Grid from './styles/grid';
// import logo from './logo.svg';

import Header from './app/header';
import AddJournalForm from './features/journals/addJournalForm';
import JournalsList from './features/journals/journalsList';
import SingleJournal from './features/journals/singleJournal';
import EditJournalForm from './features/journals/editJournalForm';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <div className='App'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Grid>
                  <AddJournalForm />
                  <JournalsList />
                </Grid>
              }
            />
            <Route
              exact
              path='/journals/:journalId'
              element={<SingleJournal />}
            />
            <Route
              exact
              path='/editJournal/:journalId'
              element={<EditJournalForm />}
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
