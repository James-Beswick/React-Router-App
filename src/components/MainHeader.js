import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
      <nav>
        <p>Page Title</p>
        <ul>
          <li>
            <Link to="/welcome">welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
