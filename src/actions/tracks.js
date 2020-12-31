import { GET_TRACKS_SUCCESS, GET_TRACKS_ERROR, RESET_TRACKS } from './types';
import { api } from '../utils';

// get tracks
export const getTracks = (timeRange) => async (dispatch) => {
  try {
    const url = `/me/top/tracks?time_range=${timeRange}&limit=50`;
    const res = await api.get(url);

    dispatch({
      type: GET_TRACKS_SUCCESS,
      payload: res.data.items
    });
  } catch (err) {
    dispatch({
      type: GET_TRACKS_ERROR
    });

    // todo: add error handling
    console.log(err);
  }
};

// reset tracks
export const resetTracks = () => async (dispatch) => {
  dispatch({
    type: RESET_TRACKS
  });
};
