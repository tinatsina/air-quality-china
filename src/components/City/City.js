import { Link } from 'react-router-dom';

const City = () => (
  <>
    <ul className="city-header">
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        City Pages
      </li>
    </ul>
    <Link to="/AQI">AQI Page</Link>
    <br />
  </>
);

export default City;
