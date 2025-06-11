import { useState } from 'react';
import './CssComponents/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
  <div className="logo-container">
    <img src="./images/logo/logo.jpg" alt="logo" />
  </div>

  <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
    ☰
  </div>

  <div className={`navbar ${isOpen ? 'open' : ''}`}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/tutorials">Tutorials</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
       <li><Link to="/quiz">Quiz</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
