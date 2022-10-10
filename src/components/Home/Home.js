// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import cityList from '../data/cityNames';
import { fetchCityRating } from '../../redux/actions/aqiActions';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.aqiReducer);

  useEffect(() => {
    if (state.length === 0) dispatch(fetchCityRating(cityList));
  }, [dispatch, state.length]);

  return (
    <ul className="home-container">
      {state.map((city) => (
        <HomeList key={city.idx} name={city.aqi} />
      ))}
    </ul>
  );
};

const HomeList = ({ name }) => (
  <li className="home-card">
    <p>Icon</p>
    <p>Flag</p>
    {name}
    <p>Data</p>
  </li>
);

HomeList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
