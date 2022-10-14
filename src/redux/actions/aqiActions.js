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
  const response = await fetch(BASE_URL + city + API_KEY);
  const payload = response.json().then((e) => {
    // The AQI data that we need to insert into state
    const payload = {
      aqi: e.data.aqi,
      city: e.data.city.name,
      co: e.data.iaqi.co.v,
      h: e.data.iaqi.h.v,
      no2: e.data.iaqi.no2.v,
      o3: e.data.iaqi.o3.v,
      p: e.data.iaqi.p.v,
      pm10: e.data.iaqi.pm10.v,
      pm25: e.data.iaqi.pm25.v,
      so2: e.data.iaqi.so2.v,
      t: e.data.iaqi.t.v,
      w: e.data.iaqi.w.v,
    };
    return payload;
  });
  return payload;
});
