import { combineReducers } from 'redux';

import artists from './artists';
import tracks from './tracks';

export default combineReducers({ artists, tracks });
