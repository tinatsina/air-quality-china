import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (state.length === 0) dispatch(fetchCityRating(cityList));
  }, [dispatch, state.length]);

  const citySearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAQIData(e.target[0].value));
    navigate('search');
  };

  return (
    <>
      <nav>
        <p>Highest Polluters</p>
      </nav>
      <div className="china-display">
        <img src={chinaMap} alt="Map of China" />
        <h3>CHINA CITIES</h3>
      </div>
      <form className="china-search-box" onSubmit={(e) => citySearchHandler(e)}>
        <input type="text" placeholder="Enter city name" required />
        <button type="submit"> SEARCH </button>
      </form>
      <div className="night-blue-list">
        <p>STATS BY CITIES</p>
      </div>
      <ul className="home-container">
        {state.map((city) => (
          <HomeList key={city.id} aqi={city.aqi} city={city.city} />
        ))}
      </ul>
      <footer>
        <p>
          Original design idea by
          <a href="https://www.behance.net/sakwadesignstudio"> Nelson Sakwa on Behance.</a>
        </p>
      </footer>
    </>
  );
};

export const HomeList = ({ aqi, city }) => {
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
