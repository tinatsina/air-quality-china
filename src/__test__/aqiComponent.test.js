import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Home, { HomeList } from '../components/Home/Home';
import Country from '../components/Country/Country';
import cityMockData, { ShanghaiData } from '../__mocks__/aqiMockst';

describe('Component Snapshot Test', () => {
  test('Test Home page snap', () => {
    const snapDragon = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const tree = snapDragon.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Test City Page Snap', () => {
    const snapCity = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Country />
        </BrowserRouter>
      </Provider>,
    );
    const tree = snapCity.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('City Page List', () => {
    const snapCity = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          {cityMockData.map((city) => (
            <HomeList key={city.id} aqi={city.aqi} city={city.city} />
          ))}
        </BrowserRouter>
      </Provider>,
    );
    const tree = snapCity.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Testing for API fetches and calls
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(ShanghaiData),
}));

// Clearing the mock fetches
beforeEach(() => {
  fetch.mockClear();
});

// Testing the fetch call structure
it('Checks whether the data has been called or not', async () => {
  // Creating the variables needed for testing
  const AQI_VALUE = await ShanghaiData.data.aqi;
  const API_FETCH_SUCCESS = await ShanghaiData.status;

  expect(API_FETCH_SUCCESS).toBe('ok');
  expect(AQI_VALUE).toBe(52);
});
