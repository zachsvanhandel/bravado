// constants
const TOKEN_KEY = 'token';
const EXPIRATION_TIME_KEY = 'token_expiration_time';

// local storage helper functions
const get = (key) => localStorage.getItem(key);
const remove = (key) => localStorage.removeItem(key);
const set = (key, value) => localStorage.setItem(key, value);

// local storage access functions
export const getToken = () => get(TOKEN_KEY);
export const getExpirationTime = () => get(EXPIRATION_TIME_KEY);

export const removeToken = () => remove(TOKEN_KEY);
export const removeExpirationTime = () => remove(EXPIRATION_TIME_KEY);

export const setToken = (value) => set(TOKEN_KEY, value);
export const setExpirationTime = (value) => set(EXPIRATION_TIME_KEY, value);

// auth functions
export const isAuthenticated = () => {
  if (!getToken()) {
    return false;
  }

  return Date.now() <= getExpirationTime();
};

export const logIn = (token, expiresIn) => {
  setToken(token);
  setExpirationTime(Date.now() + expiresIn * 1000); // expiration time in ms
};

export const logOut = () => {
  removeToken();
  removeExpirationTime();
};
