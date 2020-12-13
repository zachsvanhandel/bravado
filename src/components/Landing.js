import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { media } from '../styles';
import trends from '../images/trends.svg';

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 3rem;
  padding-bottom: 6rem;

  ${media.md`
    flex-direction: row;
    justify-content: unset;
    align-items: center;
  `}
`;

const ImageWrapper = styled.div`
  padding-bottom: 3.5rem;

  ${media.md`
    order: 2;
    flex: 3;

    padding-bottom: 0;
    padding-left: 3rem;
  `}
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  ${media.md`
    order: 1;
    flex: 2;
  `}
`;

const Heading = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 400;

  line-height: 1.2;

  margin-top: 0;
  margin-bottom: 0;
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  font-weight: 400;

  margin-top: 0.75rem;
  margin-bottom: 1.75rem;
`;

const Button = styled.a`
  display: inline-block;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  font-size: 0.875rem;

  text-decoration: none;

  padding: 0.625rem 1.25rem;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const Landing = () => {
  return (
    <Main>
      <ImageWrapper>
        <Image src={trends} />
      </ImageWrapper>

      <TextWrapper>
        <Heading>Discover your listening trends.</Heading>
        <SubHeading>
          Bravado lets you view your top artists and tracks anytime, anywhere.
          No need to wait for Spotify Wrapped!
        </SubHeading>
        <Button href='#'>
          <ButtonIcon icon={['fab', 'spotify']} />
          Log In with Spotify
        </Button>
      </TextWrapper>
    </Main>
  );
};

export default Landing;
