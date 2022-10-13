import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import cityList from '../data/cityNames';
import { fetchCityRating, fetchAQIData } from '../../redux/actions/aqiActions';
// import imageList from '../img/imgConfig';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cityReducer);

  useEffect(() => {
    if (state.length === 0) dispatch(fetchCityRating(cityList));
  }, [dispatch, state.length]);

  return (
    <ul className="home-container">
      {state.map((city) => (
        <HomeList key={city.id} aqi={city.aqi} city={city.city} />
      ))}
    </ul>
  );
};

const HomeList = ({ aqi, city }) => {
  // Use dispatch Hook initiation
  const dispatch = useDispatch();
  // Function to go to new page
  const onClickHandler = (city) => {
    dispatch(fetchAQIData(city));
  };
  return (
    <li className="home-card">
      <p>{city}</p>
      <p>{aqi}</p>
      <Link onClick={() => onClickHandler(city)} to="/Country">{city}</Link>
    </li>
  );
};

HomeList.propTypes = {
  aqi: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Home;
