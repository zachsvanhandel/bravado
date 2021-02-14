// constants
const TOKEN_KEY = 'token';
const EXPIRATION_TIME_KEY = 'token_expiration_time';
const LOGIN_REDIRECT_MAP_KEY = 'login_redirect_map';

// local storage helper functions
const get = (key) => localStorage.getItem(key);
const remove = (key) => localStorage.removeItem(key);
const set = (key, value) => localStorage.setItem(key, value);

const getObject = (key) => get(key) && JSON.parse(get(key));
const setObject = (key, value) => set(key, JSON.stringify(value));

// local storage access functions
export const getToken = () => get(TOKEN_KEY);
export const getExpirationTime = () => get(EXPIRATION_TIME_KEY);
export const getLoginRedirect = (state) => {
  const loginRedirectMap = getObject(LOGIN_REDIRECT_MAP_KEY);

  return loginRedirectMap && loginRedirectMap[state];
};

export const removeToken = () => remove(TOKEN_KEY);
export const removeExpirationTime = () => remove(EXPIRATION_TIME_KEY);
export const removeLoginRedirect = (state) => {
  const loginRedirectMap = getObject(LOGIN_REDIRECT_MAP_KEY);

  if (loginRedirectMap) {
    delete loginRedirectMap[state];
    setObject(LOGIN_REDIRECT_MAP_KEY, loginRedirectMap);
  }
};

export const setToken = (value) => set(TOKEN_KEY, value);
export const setExpirationTime = (value) => set(EXPIRATION_TIME_KEY, value);
export const setLoginRedirect = (state, value) => {
  const loginRedirectMap = getObject(LOGIN_REDIRECT_MAP_KEY);

  setObject(LOGIN_REDIRECT_MAP_KEY, { ...loginRedirectMap, [state]: value });
};

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
