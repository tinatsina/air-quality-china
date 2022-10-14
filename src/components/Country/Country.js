import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Country.css';
import { IoChevronBackOutline } from 'react-icons/io5';
import imageList from '../img/imgConfig';

const Country = () => {
  // Get the state data for the webpage we have just loaded
  const e = useSelector((state) => state.aqiReducer);
  return (
    <>
      <nav className="aqi-navbar">
        <div>
          <Link to="/">
            <IoChevronBackOutline />
          </Link>
        </div>
        <p>AQI DATA</p>
      </nav>
      <div className="aqi-big-display">
        <div>
          <h2>{e.city}</h2>
          <h3>{e.aqi}</h3>
        </div>
        <img src={imageList[1].img} alt="Map of the city" />
      </div>
      <div className="night-blue-list">
        <p>CITY AIR QUALITY STATS</p>
      </div>
      <ul className="city-header">
        <li>
          <p>CO</p>
          <p>{e.co}</p>
        </li>
        <li>
          <p>H</p>
          <p>{e.h}</p>
        </li>
        <li>
          <p>NO2</p>
          <p>{e.no2}</p>
        </li>
        <li>
          <p>O3</p>
          <p>{e.o3}</p>
        </li>
        <li>
          <p>P</p>
          <p>{e.p}</p>
        </li>
        <li>
          <p>PM10</p>
          <p>{e.pm10}</p>
        </li>
        <li>
          <p>PM25</p>
          <p>{e.pm25}</p>
        </li>
        <li>
          <p>SO2</p>
          <p>{e.so2}</p>
        </li>
        <li>
          <p>T</p>
          <p>{e.t}</p>
        </li>
        <li>
          <p>W</p>
          <p>{e.w}</p>
        </li>
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

export default Country;
