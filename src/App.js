import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles';
import Artists from './components/Artists';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Tracks from './components/Tracks';
import theme from './theme';

import 'sanitize.css';
import './icons';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Layout>
          <Switch>
            <PublicRoute restricted exact path='/'>
              <Home />
            </PublicRoute>

            <PublicRoute restricted exact path='/login'>
              <Login />
            </PublicRoute>

            <PrivateRoute exact path='/dashboard'>
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute exact path='/artists'>
              <Artists />
            </PrivateRoute>

            <PrivateRoute exact path='/tracks'>
              <Tracks />
            </PrivateRoute>

            <PublicRoute>
              <NotFound />
            </PublicRoute>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
