import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';

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

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
