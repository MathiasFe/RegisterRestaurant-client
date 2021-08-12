import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
// Material UI
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './util/globalCss'
import { ProfileProvider } from './Context/ProfileContext';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <ProfileProvider>
            <Routes />
          </ProfileProvider>
        </ThemeProvider>
      </Router>
    </>
  );

}

export default App;
