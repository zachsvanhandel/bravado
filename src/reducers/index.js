import { combineReducers } from 'redux';

import alerts from './alerts';
import artists from './artists';
import tracks from './tracks';

export default combineReducers({ alerts, artists, tracks });
