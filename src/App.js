import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import Grid from './styles/grid';
import Header from './app/header';
import AddJournalForm from './features/journals/addJournalForm';
import JournalsList from './features/journals/journalsList';
import SingleJournal from './features/journals/singleJournal';
import EditJournalForm from './features/journals/editJournalForm';
import Login from './features/users/login';
import SignUp from './features/users/signUp';
import ResetPW from './features/users/resetPW';
import RequireAuth from './features/common/requireAuth';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Grid>
                    <AddJournalForm />
                    <JournalsList />
                  </Grid>
                </RequireAuth>
              }
            />
            <Route
              path='/journals/:journalId'
              element={
                <RequireAuth>
                  <SingleJournal />
                </RequireAuth>
              }
            />
            <Route
              path='/editJournal/:journalId'
              element={
                <RequireAuth>
                  <EditJournalForm />
                </RequireAuth>
              }
            />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/newpassword' element={<ResetPW />} />
            <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
