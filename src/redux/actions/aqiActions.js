import { createAsyncThunk } from '@reduxjs/toolkit';

export const FETCH_AQI_DATA = 'redux/actions/aqiActions/FETCH_AQI_DATA';
export const FETCH_CITY_DATA = 'redux/actions/aqiActions/FETCH_CITY_DATA';
const BASE_URL = 'api/fetch';

// Fetch the overall rating for each province
export const fetchCityRating = createAsyncThunk(FETCH_CITY_DATA, async (city) => {
  const promises = city.map(async (city) => {
    const response = await fetch(BASE_URL + city);
    const data = response.json();
    return data;
  });
  const payload = Promise.all(promises);
  return payload;
});

// Fetch the AQI data rating for just one city
export const fetchAQIData = createAsyncThunk(FETCH_AQI_DATA, async (city) => {
  const response = await fetch(BASE_URL + city);
  const payload = response.json();
  return payload;
});
