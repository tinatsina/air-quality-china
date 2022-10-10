import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import AQI from './components/AQI/AQI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Country" element={<Country />} />
          <Route path="AQI" element={<AQI />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
