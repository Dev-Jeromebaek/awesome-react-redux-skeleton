import * as types from '../actions/ActionTypes';
import image from '../assets/images/image.jpg';

const initialState = {
  image,
};

export default function sampleRecuder2(state = initialState, action) {
  if (action.type === types.SAMPLE_ACTION2) {
    return Object.assign({}, state, { image });
  }
  return state;
}
