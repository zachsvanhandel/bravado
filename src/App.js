import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';
import Header from './components/Header';
import Landing from './components/Landing';

import 'sanitize.css';
import './icons';

const Container = styled.div`
  min-height: 100vh;
  max-width: 72rem;

  display: flex;
  flex-direction: column;

  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Container>
          <Header />

          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
