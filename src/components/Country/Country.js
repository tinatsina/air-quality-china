import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Country.css';
import { IoChevronBackOutline } from 'react-icons/io5';

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
        <h2>{e.city}</h2>
        <h3>{e.aqi}</h3>
      </div>
      <ul className="city-header">
        <li>{e.co}</li>
        <li>{e.h}</li>
        <li>{e.no2}</li>
        <li>{e.o3}</li>
        <li>{e.p}</li>
        <li>{e.pm10}</li>
        <li>{e.pm25}</li>
        <li>{e.so2}</li>
        <li>{e.t}</li>
        <li>{e.w}</li>
      </ul>
      <br />
    </>
  );
};

export default Country;
