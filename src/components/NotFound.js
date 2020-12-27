import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Main as MainStyle, mixins } from '../styles';

const Main = styled(MainStyle)`
  display: flex;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: clamp(2rem, 4.5vw, 2.5rem);
  font-weight: 400;

  line-height: 1.2;

  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.75rem;
`;

const Button = styled(Link)`
  ${mixins.button}
`;

const NotFound = () => {
  return (
    <Main>
      <div>
        <Heading>Page not found.</Heading>
        <Text>The page you were looking for does not exist.</Text>
        <Button to='/'>Return to home</Button>
      </div>
    </Main>
  );
};

export default NotFound;
