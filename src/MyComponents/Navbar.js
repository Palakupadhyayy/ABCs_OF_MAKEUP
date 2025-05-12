import React from 'react';
import './CssComponents/Navbar.css'
import {Link} from 'react-router-dom'; // ; is automatically inserted due to ASI so even if we don't add ; after imports, it still works but technically using ; is a requirement


export default function Navbar(props) {
  return (
    <nav> 
    <img src="./images/logo/logo.jpg" alt="logo"/>
    <div className="navbar">
    <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/tutorials">Tutorials</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
      
    </nav>
  )
}
