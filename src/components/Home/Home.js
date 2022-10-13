import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Home.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';
import cityList from '../data/cityNames';
import { fetchCityRating, fetchAQIData } from '../../redux/actions/aqiActions';
import imageList from '../img/imgConfig';
import chinaMap from '../img/China.svg';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cityReducer);

  useEffect(() => {
    if (state.length === 0) dispatch(fetchCityRating(cityList));
  }, [dispatch, state.length]);

  return (
    <>
      <nav>
        <p>Highest Polluters</p>
      </nav>
      <div className="china-display">
        <img src={chinaMap} alt="Map of China" />
        <h3>CHINA CITIES</h3>
      </div>
      <div className="night-blue-list">
        <p>STATS BY CITIES</p>
      </div>
      <ul className="home-container">
        {state.map((city) => (
          <HomeList key={city.id} aqi={city.aqi} city={city.city} />
        ))}
      </ul>
    </>
  );
};

const HomeList = ({ aqi, city }) => {
  // Use dispatch Hook initiation
  const dispatch = useDispatch();
  // Function to go to new page
  const onClickHandler = (city) => {
    dispatch(fetchAQIData(city));
  };
  // List items to be displayed at the finale
  return (
    <li className="home-card">
      <div className="image-arrow-conatiner">
        <img src={imageList[0].img} alt="city mapping" />
        <Link onClick={() => onClickHandler(city)} to={`${city}`}>
          <BsArrowRightCircle />
        </Link>
      </div>
      <p className="city-name">{city}</p>
      <p className="city-aqi">{aqi}</p>
    </li>
  );
};

HomeList.propTypes = {
  aqi: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Home;
