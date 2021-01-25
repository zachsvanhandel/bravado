import { GET_TRACKS_SUCCESS, GET_TRACKS_ERROR } from './types';
import { setAlert } from './alerts';
import { api } from '../utils';

// get tracks
export const getTracks = (timeRange) => async (dispatch) => {
  try {
    const url = `/me/top/tracks?time_range=${timeRange}&limit=50`;
    const res = await api.get(url);

    dispatch({
      type: GET_TRACKS_SUCCESS,
      payload: {
        timeRange,
        data: res.data.items
      }
    });
  } catch (err) {
    dispatch({
      type: GET_TRACKS_ERROR
    });

    dispatch(
      setAlert(
        'error',
        'An error occurred while attempting to retrieve track data. Please try refreshing the page.'
      )
    );
  }
};
