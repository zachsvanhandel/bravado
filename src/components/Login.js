import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import { Main as MainStyle } from '../styles';
import { logIn } from '../auth';
import { getHashParams } from '../utils';

const Main = styled(MainStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    const { access_token, expires_in, error } = getHashParams();

    if (access_token && expires_in) {
      logIn(access_token, expires_in);
      history.push('/dashboard');
    } else if (error) {
      // todo: add error handling
      console.log(error);
    }
  }, [history]);

  return (
    <Main>
      <LoginButton />
    </Main>
  );
};

export default Login;
