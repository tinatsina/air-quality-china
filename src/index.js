import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from './redux/configureStore';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import cityList from './components/data/cityNames';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {cityList.map((city) => (
            <Route key={uuidv4()} path={city.name} element={<Country />} />
          ))}
          <Route path="search" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
