// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="logo">
        <Link to="/">
          <img src="../images/App Logo.jpg" alt="eStore" className="logo-image" />
        </Link>
        <Link className='store-name' to="/">eStore</Link>
      </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/authenticate/">SignUp</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} eStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

