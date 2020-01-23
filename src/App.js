import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Komponen Halaman
import Registrasi from './pages/registrasi/registrasi';
import Login from './pages/login/login';
import NotFound from './pages/404/NotFound'
import Private from './pages/private';
import PrivateRoute from './components/PrivateRoute';

//firebase context provider
import FirebaseProvider from './components/FirebaseProvider';

//material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from './config/theme';

class App extends Component {
  render() {
    return (
      <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
        <FirebaseProvider>
          <Router>
            <Switch>
              <PrivateRoute path="/" exact component={Private} />
              <PrivateRoute path="/fetchDataApi" component={Private} />
              <Route path="/registrasi" component={Registrasi} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </FirebaseProvider>
        </ThemeProvider>
      </CssBaseline>
      </>
    );
  }
}

export default App;