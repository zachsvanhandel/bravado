import { GET_USER_SUCCESS, GET_USER_ERROR } from './types';
import { setAlert } from './alerts';
import { api } from '../utils';

// get user
export const getUser = () => async (dispatch) => {
  try {
    const url = 'https://api.spotify.com/v1/me';
    const res = await api.get(url);

    dispatch({
      type: GET_USER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR
    });

    dispatch(
      setAlert(
        'error',
        'An error occurred while attempting to retrieve user data. Please try refreshing the page.'
      )
    );
  }
};
