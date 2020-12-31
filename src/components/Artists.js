import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Loading from './Loading';
import { Main, media, mixins } from '../styles';
import Popularity from './Popularity';
import { getArtists, resetArtists } from '../actions/artists';
import { useQuery } from '../hooks';

const Header = styled.header`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.5rem;

  ${media.sm`
    flex-direction: row;
    align-items: center;
  `}
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;

  text-align: center;

  margin-top: 0;
  margin-bottom: 0.875rem;

  ${media.sm`
    margin-bottom: 0;
  `}
`;

const RangeGroup = styled.ul`
  ${mixins.unstyledList}

  display: flex;

  text-align: center;

  border: 0.0625rem solid ${(props) => props.theme.colors.dark};

  ${media.sm`
    margin-left: auto;
  `};
`;

const RangeItem = styled.li`
  flex: auto;

  ${media.sm`
    flex: unset;
  `}
`;

const RangeLink = styled(Link)`
  display: block;

  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.dark};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.dark : props.theme.colors.white};

  font-size: 0.875rem;
  font-weight: 600;

  text-decoration: none;
  text-transform: uppercase;

  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.dark};
`;

const ItemList = styled.ol`
  ${mixins.unstyledList}
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const ItemImage = styled.img`
  height: 4.5rem;
  width: 4.5rem;
`;

const Rank = styled.div`
  position: absolute;

  align-self: flex-end;

  height: 1.5rem;
  width: 1.5rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  text-align: center;
`;

const ItemContent = styled.div`
  flex: 1;
  min-width: 0; /* forces text to truncate */

  padding: 1rem;
`;

const ItemText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Artists = ({
  artists: { artists, isLoading },
  getArtists,
  resetArtists
}) => {
  const timeRange = useQuery().get('time_range') || 'long_term';

  useEffect(() => {
    setTimeout(() => {
      getArtists(timeRange);
    }, 500); // add artificial delay

    return resetArtists;
  }, [timeRange, getArtists, resetArtists]);

  return isLoading ? (
    <Loading />
  ) : (
    <Main>
      <Header>
        <Title>Your Top Artists</Title>

        <RangeGroup>
          <RangeItem>
            <RangeLink
              $isActive={timeRange === 'long_term'}
              to='/artists?time_range=long_term'
            >
              All Time
            </RangeLink>
          </RangeItem>
          <RangeItem>
            <RangeLink
              $isActive={timeRange === 'medium_term'}
              to='/artists?time_range=medium_term'
            >
              Past 6 Months
            </RangeLink>
          </RangeItem>
          <RangeItem>
            <RangeLink
              $isActive={timeRange === 'short_term'}
              to='/artists?time_range=short_term'
            >
              Past Month
            </RangeLink>
          </RangeItem>
        </RangeGroup>
      </Header>

      {artists.length === 0 ? (
        <div>No data to display</div>
      ) : (
        <ItemList>
          {artists.map((item, index) => (
            <Item key={index}>
              <ItemImage src={item.images[0].url} />
              <Rank>{index + 1}</Rank>
              <ItemContent>
                <ItemText>{item.name}</ItemText>
              </ItemContent>
              <Popularity score={item.popularity} />
            </Item>
          ))}
        </ItemList>
      )}
    </Main>
  );
};

Artists.propTypes = {
  artists: PropTypes.object.isRequired,
  getArtists: PropTypes.func.isRequired,
  resetArtists: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  artists: state.artists
});

export default connect(mapStateToProps, { getArtists, resetArtists })(Artists);
