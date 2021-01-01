import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Alerts from './Alerts';
import Header from './Header';
import { Container as ContainerStyle } from '../styles';

const Container = styled(ContainerStyle)`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Container>
        <Header />
        {children}
      </Container>

      <Alerts />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
