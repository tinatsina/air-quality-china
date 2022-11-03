import { FETCH_AQI_DATA } from '../actions/aqiActions';

const initialState = [];

const aqiReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_AQI_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default aqiReducer;
