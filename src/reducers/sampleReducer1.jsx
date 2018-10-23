import * as types from '../actions/ActionTypes';

const initialState = {
  title: 'React Redux Skeleton',
  color: '#000000',
};

export default function sampleReducer1(state = initialState, action) {
  switch (action.type) {
    case types.SAMPLE_ACTION1:
      return {
        ...state,
        title: action.title,
      };
    case types.CHANGE_COLOR:
      return Object.assign({}, state, { color: action.color });
    default:
      return state;
  }
}
