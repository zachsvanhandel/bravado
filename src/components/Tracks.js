import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from './Loading';
import PageLayout from './PageLayout';
import RankedItemList from './RankedItemList';
import { getTracks, resetTracks } from '../actions/tracks';
import { useQuery } from '../hooks';

const Tracks = ({ tracks: { tracks, isLoading }, getTracks, resetTracks }) => {
  const timeRange = useQuery().get('time_range') || 'long_term';

  useEffect(() => {
    setTimeout(() => {
      getTracks(timeRange);
    }, 500); // add artificial delay

    return resetTracks;
  }, [timeRange, getTracks, resetTracks]);

  const links = [
    { url: '/tracks?time_range=long_term', text: 'All Time' },
    { url: '/tracks?time_range=medium_term', text: 'Past 6 Months' },
    { url: '/tracks?time_range=short_term', text: 'Past Month' }
  ];

  const isActiveLink = (link) => {
    return link.url.split('=')[1] === timeRange;
  };

  return isLoading ? (
    <Loading />
  ) : (
    <PageLayout
      title='Your Top Tracks'
      links={links}
      isActiveLink={isActiveLink}
    >
      {tracks.length === 0 ? (
        <div>No data to display</div>
      ) : (
        <RankedItemList
          items={tracks}
          getImageUrl={(track) => track.album.images[0].url}
          getText={(track) => track.name}
          getSubText={(track) =>
            track.artists.map((artist) => artist.name).join(', ')
          }
          getPopularity={(track) => track.popularity}
        />
      )}
    </PageLayout>
  );
};

Tracks.propTypes = {
  tracks: PropTypes.object.isRequired,
  getTracks: PropTypes.func.isRequired,
  resetTracks: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  tracks: state.tracks
});

export default connect(mapStateToProps, { getTracks, resetTracks })(Tracks);
