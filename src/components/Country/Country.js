import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Country = () => {
  // Get the state data for the webpage we have just loaded
  const e = useSelector((state) => state.aqiReducer);
  console.log(e);
  return (
    <>
      <h1>
        Hello
      </h1>
      <h2>AQI Data</h2>
      <Link to="/">Home Page</Link>
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
