import { GET_ARTISTS_SUCCESS, GET_ARTISTS_ERROR, RESET_ARTISTS } from './types';
import { api } from '../utils';

// get artists
export const getArtists = (timeRange) => async (dispatch) => {
  try {
    const url = `/me/top/artists?time_range=${timeRange}&limit=50`;
    const res = await api.get(url);

    dispatch({
      type: GET_ARTISTS_SUCCESS,
      payload: res.data.items
    });
  } catch (err) {
    dispatch({
      type: GET_ARTISTS_ERROR
    });

    // todo: add error handling
    console.log(err);
  }
};

// reset artists
export const resetArtists = () => async (dispatch) => {
  dispatch({
    type: RESET_ARTISTS
  });
};