import { combineReducers } from 'redux';

import alerts from './alerts';
import artists from './artists';
import tracks from './tracks';
import user from './user';

export default combineReducers({ alerts, artists, tracks, user });
