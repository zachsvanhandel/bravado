import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { mixins } from '../styles';
import { useLoginRedirectQueryParam } from '../hooks';
import { setLoginRedirect } from '../auth';

const Button = styled.a`
  ${mixins.button}
`;

const SpotifyIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const LoginButton = () => {
  const redirect = useLoginRedirectQueryParam() || '/dashboard';

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/login`;
  const STATE = uuidv4();

  const LOGIN_URI = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}&scope=user-top-read&response_type=token`;

  return (
    <Button href={LOGIN_URI} onClick={() => setLoginRedirect(STATE, redirect)}>
      <SpotifyIcon icon={['fab', 'spotify']} />
      Log In with Spotify
    </Button>
  );
};

export default LoginButton;
