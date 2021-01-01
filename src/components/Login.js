import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import { Main as MainStyle } from '../styles';
import { logIn } from '../auth';
import { setAlert } from '../actions/alerts';
import { getHashParams } from '../utils';

const Main = styled(MainStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = ({ setAlert }) => {
  const history = useHistory();

  useEffect(() => {
    const { access_token, expires_in, error } = getHashParams();

    if (access_token && expires_in) {
      logIn(access_token, expires_in);

      history.push('/dashboard');
    } else if (error) {
      setAlert(
        'Error',
        'An error occurred while attempting to login. Please try again.'
      );

      history.push('/login'); // remove hash params from url
    }
  }, [history, setAlert]);

  return (
    <Main>
      <LoginButton />
    </Main>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Login);
