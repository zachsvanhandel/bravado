import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  font-size: 0.875rem;

  text-decoration: none;

  padding: 0.625rem 1.25rem;
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
