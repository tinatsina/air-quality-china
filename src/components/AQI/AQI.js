import { Link } from 'react-router-dom';

const AQI = () => (
  <>
    <ul className="air-quality-header">
      <li>
        <Link to="/Country">Country</Link>
      </li>
      <li>
        AQI Page Data
      </li>
    </ul>
    <h1>AQI page</h1>
    <Link to="/Country">Country Page</Link>
  </>
);

export default AQI;
