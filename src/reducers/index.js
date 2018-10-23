import { combineReducers } from 'redux';

import sampleReducer1 from './sampleReducer1';
import sampleReducer2 from './sampleReducer2';

const reducers = combineReducers({
  sampleReducer1,
  sampleReducer2,
});

export default reducers;
