import { SET_ALERT, REMOVE_ALERT } from './types';

// set alert
export const setAlert = (type, message, timeout = 5000) => (dispatch) => {
  const timestamp = Date.now();

  dispatch({
    type: SET_ALERT,
    payload: { timestamp, type, message }
  });

  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT, payload: timestamp });
  }, timeout);
};

export const removeAlert = (timestamp) => (dispatch) => {
  dispatch({ type: REMOVE_ALERT, payload: timestamp });
};
