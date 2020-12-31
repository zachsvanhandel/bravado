import {
  GET_TRACKS_SUCCESS,
  GET_TRACKS_ERROR,
  RESET_TRACKS
} from '../actions/types';

const initialState = {
  tracks: [],
  isLoading: true
};

const tracksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: payload,
        isLoading: false
      };
    case GET_TRACKS_ERROR:
      return {
        ...state,
        tracks: [],
        isLoading: false
      };
    case RESET_TRACKS:
      return initialState;
    default:
      return state;
  }
};

export default tracksReducer;
