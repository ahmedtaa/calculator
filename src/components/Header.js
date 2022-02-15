import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="logo">
      <h1>Math Magicans</h1>
    </div>
    <div className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/calc" className="link">
        Calculator
      </Link>
      <Link to="/quote" className="link">
        Quote
      </Link>
    </div>
  </div>
);

export default Header;
