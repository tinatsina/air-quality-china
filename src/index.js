import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import City from './components/City/City';
import AQI from './components/AQI/AQI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="City" element={<City />} />
        <Route path="AQI" element={<AQI />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
