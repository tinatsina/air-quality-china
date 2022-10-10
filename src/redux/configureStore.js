import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import aqiReducer from './reducers/aqiReducer';
import cityReducer from './reducers/cityReducer';

const rootReducer = combineReducers({
  aqiReducer,
  cityReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
