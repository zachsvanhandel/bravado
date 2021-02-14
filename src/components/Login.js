import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import { Main as MainStyle } from '../styles';
import { logIn, getLoginRedirect, removeLoginRedirect } from '../auth';
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
    const { access_token, expires_in, state, error } = getHashParams();

    const redirect = getLoginRedirect(state); // if state is valid, redirect will not be null
    if (access_token && expires_in && redirect) {
      logIn(access_token, expires_in);
      removeLoginRedirect(state);

      history.replace(redirect);
    } else if (state || error) {
      setAlert(
        'warning',
        'A problem was encountered while attempting to log in. Please try again.'
      );

      history.replace('/login'); // remove hash params from url
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
