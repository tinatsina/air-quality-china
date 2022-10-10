import { FETCH_CITY_DATA } from '../actions/aqiActions';

const initialState = [];

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_CITY_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default cityReducer;
