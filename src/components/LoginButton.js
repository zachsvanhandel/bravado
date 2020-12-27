import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { mixins } from '../styles';

const Button = styled.a`
  ${mixins.button}
`;

const SpotifyIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const LoginButton = () => {
  const { REACT_APP_CLIENT_ID } = process.env;
  const REDIRECT_URI = `${window.location.origin}/login`;

  const LOGIN_URI = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user-top-read&response_type=token`;

  return (
    <Button href={LOGIN_URI}>
      <SpotifyIcon icon={['fab', 'spotify']} />
      Log In with Spotify
    </Button>
  );
};

export default LoginButton;
