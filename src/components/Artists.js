import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from './Loading';
import PageLayout from './PageLayout';
import RankedItemList from './RankedItemList';
import { getArtists } from '../actions/artists';
import { useQuery } from '../hooks';

const Artists = ({ artists, getArtists }) => {
  const timeRange = useQuery().get('time_range') || 'long_term';

  useEffect(() => {
    if (artists[timeRange].isLoading) {
      setTimeout(() => {
        getArtists(timeRange);
      }, 500); // add artificial delay
    }
  }, [timeRange, artists, getArtists]);

  const links = [
    { url: '/artists?time_range=long_term', text: 'All Time' },
    { url: '/artists?time_range=medium_term', text: 'Past 6 Months' },
    { url: '/artists?time_range=short_term', text: 'Past Month' }
  ];

  const isActiveLink = (link) => {
    return link.url.split('=')[1] === timeRange;
  };

  return artists[timeRange].isLoading ? (
    <Loading />
  ) : (
    <PageLayout
      title='Your Top Artists'
      links={links}
      isActiveLink={isActiveLink}
    >
      {artists[timeRange].data.length === 0 ? (
        <div>No data to display</div>
      ) : (
        <RankedItemList
          items={artists[timeRange].data}
          getImageUrl={(artist) => artist.images[0].url}
          getText={(artist) => artist.name}
          getPopularity={(artist) => artist.popularity}
        />
      )}
    </PageLayout>
  );
};

Artists.propTypes = {
  artists: PropTypes.object.isRequired,
  getArtists: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  artists: state.artists
});

export default connect(mapStateToProps, { getArtists })(Artists);
