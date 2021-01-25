import { GET_TRACKS_SUCCESS, GET_TRACKS_ERROR } from '../actions/types';

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

const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRACKS_SUCCESS:
      return {
        ...state,
        [payload.timeRange]: {
          data: payload.data,
          isLoading: false
        }
      };
    case GET_TRACKS_ERROR:
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

export default tracksReducer;
