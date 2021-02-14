import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Main as MainStyle, mixins } from '../styles';
import { isAuthenticated } from '../auth';
import { useLoginLocation } from '../hooks';

const Main = styled(MainStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 3.5rem);
  font-weight: 400;

  line-height: 1.2;

  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const SubText = styled.p`
  font-size: 0.75rem;

  margin-top: 0;
  margin-bottom: 0;
`;

const LoginLink = styled(Link)`
  ${mixins.link}
`;

const Button = styled(Link)`
  ${mixins.button}

  margin-top: 1.5rem;
`;

const NotFound = () => {
  const loginLocation = useLoginLocation();

  return (
    <Main>
      <Heading>404</Heading>
      <Text>That page could not be found.</Text>
      {!isAuthenticated() && (
        <SubText>
          Need to <LoginLink to={loginLocation}>log in</LoginLink>?
        </SubText>
      )}
      <Button to='/'>Return to home</Button>
    </Main>
  );
};

export default NotFound;
