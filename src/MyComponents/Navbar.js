import { useState, useEffect } from 'react';
import './CssComponents/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Close the navbar when window resizes back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optional: Close menu when a link is clicked (for better UX)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src="./images/logo/logo.jpg" alt="logo" />
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        ☰
      </button>

      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
          <li><Link to="/tutorials" onClick={handleLinkClick}>Tutorials</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
          <li><Link to="/quiz" onClick={handleLinkClick}>Quiz</Link></li>
          <li><Link to="/register" onClick={handleLinkClick}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
