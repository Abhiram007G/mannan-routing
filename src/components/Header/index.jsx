import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/all-products">Products</Link></li>
          <li><button className="logout-btn" onClick={() => console.log('Logout clicked')}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;