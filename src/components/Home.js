import styled from 'styled-components';

import LoginButton from './LoginButton';
import { Main as MainStyle, media } from '../styles';

import trends from '../images/trends.svg';

const Main = styled(MainStyle)`
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const Home = () => {
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
        <LoginButton />
      </TextWrapper>
    </Main>
  );
};

export default Home;
