/*
 * actions creators
 */

import * as types from './ActionTypes';

export const sampleAction1 = () => ({
  type: types.SAMPLE_ACTION1,
});

export const sampleAction2 = () => ({
  type: types.SAMPLE_ACTION2,
});

export const changeColor = color => ({
  type: types.CHANGE_COLOR,
  color,
});
