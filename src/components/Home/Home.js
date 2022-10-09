import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <ul className="home-header">
      <li>Most Polluted</li>
    </ul>
    <Link to="City">City Page</Link>
  </>
);

export default Home;
