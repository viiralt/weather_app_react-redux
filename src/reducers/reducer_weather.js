import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER: 
  // instead of manipulate state directly (like state.push, BAAAAD) use concat to return a new array 
    return state.concat([action.payload.data]);
  }
  return state;
}

