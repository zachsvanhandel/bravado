import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loading from './Loading';
import { Main as MainStyle } from '../styles';
import { getUser } from '../actions/user';

const Main = styled(MainStyle)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const UserImage = styled.img`
  height: 17.25rem;
  width: 17.25rem;

  border-radius: 50%;
`;

const LoginMessage = styled.h1`
  font-size: clamp(1.25rem, 6.5vw, 2rem);
  font-weight: 400;

  margin-top: 1.25rem;
  margin-bottom: 1.125rem;
`;

const ButtonWrapper = styled.div`
  margin-left: -0.25rem;
  margin-right: -0.25rem;
`;

const TopArtistsButton = styled(Link)`
  ${(props) => props.theme.mixins.button}

  margin: 0.25rem;
`;

const TopTracksButton = styled(Link)`
  ${(props) => props.theme.mixins.buttonAlt}

  margin: 0.25rem;
`;

const Dashboard = ({ user, getUser }) => {
  useEffect(() => {
    if (user.isLoading) {
      setTimeout(() => {
        getUser();
      }, 500); // add artificial delay
    }
  }, [user, getUser]);

  return user.isLoading ? (
    <Loading />
  ) : (
    <Main>
      {!user.data ? (
        <div>User data unavailable</div>
      ) : (
        <>
          <UserImage src={user.data.images[0].url} />
          <LoginMessage>
            Logged in as <strong>{user.data.display_name}</strong>
          </LoginMessage>

          <ButtonWrapper>
            <TopArtistsButton to='/artists'>
              View your top artists
            </TopArtistsButton>
            <TopTracksButton to='/tracks'>View your top tracks</TopTracksButton>
          </ButtonWrapper>
        </>
      )}
    </Main>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { getUser })(Dashboard);
