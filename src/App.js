import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles';

import 'sanitize.css';
import './icons';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div>Hello World!</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
