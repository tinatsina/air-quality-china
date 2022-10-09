import { Link } from 'react-router-dom';

const City = () => (
  <>
    <h1>City Page</h1>
    <Link to="/AQI">AQI Page</Link>
    <br />
    <Link to="/">Home Page</Link>
  </>
);

export default City;
