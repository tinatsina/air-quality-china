import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import cityList from '../data/cityNames';
import { fetchCityRating } from '../../redux/actions/aqiActions';
import imageList from '../img/imgConfig';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cityReducer);

  useEffect(() => {
    dispatch(fetchCityRating(cityList));
  }, [dispatch, state.length]);

  return (
    <ul className="home-container">
      <img alt="country SVG" src={imageList[0].img} />
      {state.map((city) => (
        <HomeList key={city.id} aqi={city.aqi} city={city.city} />
      ))}
    </ul>
  );
};

const HomeList = ({ aqi, city }) => (
  <li className="home-card">
    <p>{city}</p>
    <p>{aqi}</p>
  </li>
);

HomeList.propTypes = {
  aqi: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Home;
