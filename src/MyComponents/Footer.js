import './CssComponents/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-col">
            <h4>ABC's of Makeup</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Support</h4>
            <ul>
              <li><Link to="/contact">Support</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a id="fb" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a id="insta" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a id="twi" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a id="lin" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a id="yt" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p> 2025 Palak Upadhyay | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
