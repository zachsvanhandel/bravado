import { GET_USER_SUCCESS, GET_USER_ERROR } from '../actions/types';

const initialState = {
  data: null,
  isLoading: true
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    case GET_USER_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
