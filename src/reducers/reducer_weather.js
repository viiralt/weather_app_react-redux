import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER: {
    if(action.error) {
      return state;
    }
    return [action.payload.data, ...state];
  }
  }
  return state;
}



