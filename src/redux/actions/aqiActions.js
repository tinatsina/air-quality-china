import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const FETCH_AQI_DATA = 'redux/actions/aqiActions/FETCH_AQI_DATA';
export const FETCH_CITY_DATA = 'redux/actions/aqiActions/FETCH_CITY_DATA';
const BASE_URL = 'https://api.waqi.info/feed/';
const API_KEY = '/?token=db3bc091facc8135571acb55a0f14b5b7b921ec2';

// Fetch the overall rating for each province
export const fetchCityRating = createAsyncThunk(FETCH_CITY_DATA, async (city) => {
  const promises = city.map(async (city) => {
    const response = await fetch(BASE_URL + city.name + API_KEY);
    const data = response.json();
    return data;
  });
  const data = Promise.all(promises).then((payload) => {
    const result = payload.map((e) => ({
      id: uuidv4(),
      aqi: e.data.aqi,
      city: e.data.city.name.split(' ')[0],
    }));
    return result;
  });
  return data;
});

// Fetch the AQI data rating for just one city
export const fetchAQIData = createAsyncThunk(FETCH_AQI_DATA, async (city) => {
  const response = await fetch(BASE_URL + city);
  const payload = response.json();
  return payload;
});
