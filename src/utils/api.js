import axios from 'axios';

import { getToken } from '../auth';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// add auth header before sending request
api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${getToken()}`
  };

  return config;
});

export default api;
