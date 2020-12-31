import {
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_ERROR,
  RESET_ARTISTS
} from '../actions/types';

const initialState = {
  artists: [],
  isLoading: true
};

const artistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: payload,
        isLoading: false
      };
    case GET_ARTISTS_ERROR:
      return {
        ...state,
        artists: [],
        isLoading: false
      };
    case RESET_ARTISTS:
      return initialState;
    default:
      return state;
  }
};

export default artistsReducer;
