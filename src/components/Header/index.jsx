import { Link } from 'react-router-dom';
import './index.css';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"



function Header() {

  const navigate = useNavigate();

  const onLogOut = () => {
    Cookies.remove("jwt_token")
    navigate("/login");
  }

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
          <li><button className="logout-btn" onClick={onLogOut}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;