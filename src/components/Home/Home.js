import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <ul className="home-header">
      <li>Most Polluted</li>
    </ul>
    <Link to="Country">Country Page</Link>
  </>
);

export default Home;
