import { GET_ARTISTS_SUCCESS, GET_ARTISTS_ERROR } from '../actions/types';

const initialState = {
  short_term: {
    data: [],
    isLoading: true
  },
  medium_term: {
    data: [],
    isLoading: true
  },
  long_term: {
    data: [],
    isLoading: true
  }
};

const artistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTISTS_SUCCESS:
      return {
        ...state,
        [payload.timeRange]: {
          data: payload.data,
          isLoading: false
        }
      };
    case GET_ARTISTS_ERROR:
      return {
        ...state,
        [payload.timeRange]: {
          data: [],
          isLoading: false
        }
      };
    default:
      return state;
  }
};

export default artistsReducer;
